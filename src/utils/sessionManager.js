import { authService } from "./supabase.js";

class SessionManager {
  constructor() {
    // Test-Modus: Einfach auf true/false setzen
    this.TEST_MODE = false; // Setzen Sie auf true für Test-Modus (1 Minute), false für Production (30 Minuten)

    // Zeiten basierend auf Test-Modus
    if (this.TEST_MODE) {
      this.SESSION_TIMEOUT = 60 * 1000; // 1 Minute für Tests
      this.WARNING_TIME = 10 * 1000; // 10 Sekunden vor Ablauf warnen
    } else {
      this.SESSION_TIMEOUT = 30 * 60 * 1000; // 30 Minuten für Production
      this.WARNING_TIME = 10 * 60 * 1000; // 10 Minuten vor Ablauf warnen
    }

    this.timer = null;
    this.warningTimer = null;
    this.isActive = false;
    this.callbacks = {
      onWarning: null,
      onTimeout: null,
      onActivity: null,
    };

    this.lastActivity = Date.now();
    this.events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    // Bind methods to preserve context
    this.resetTimer = this.resetTimer.bind(this);
    this.handleActivity = this.handleActivity.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
  }

  // Session starten
  startSession(callbacks = {}) {
    if (this.isActive) {
      this.stopSession();
    }

    this.callbacks = { ...this.callbacks, ...callbacks };
    this.isActive = true;
    this.lastActivity = Date.now();

    // Event-Listener für Aktivitätserkennung
    this.events.forEach((event) => {
      document.addEventListener(event, this.handleActivity, true);
    });

    // Visibility API für Tab-Wechsel
    document.addEventListener("visibilitychange", this.handleVisibilityChange);

    // Beim Schließen des Browsers/Tabs
    window.addEventListener("beforeunload", this.handleBeforeUnload);

    // Timer starten
    this.resetTimer();
  }

  // Session beenden
  stopSession() {
    this.isActive = false;

    // Timer löschen
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
      this.warningTimer = null;
    }

    // Event-Listener entfernen
    this.events.forEach((event) => {
      document.removeEventListener(event, this.handleActivity, true);
    });

    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  }

  // Session verlängern
  extendSession() {
    if (!this.isActive) return;

    this.lastActivity = Date.now();
    this.resetTimer();

    if (this.callbacks.onActivity) {
      this.callbacks.onActivity();
    }
  }

  // Timer zurücksetzen
  resetTimer() {
    // Bestehende Timer löschen
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }

    // Warning Timer setzen
    const warningDelay = this.SESSION_TIMEOUT - this.WARNING_TIME;

    this.warningTimer = setTimeout(() => {
      if (this.isActive && this.callbacks.onWarning) {
        this.callbacks.onWarning();
      }
    }, warningDelay);

    // Timeout Timer setzen
    this.timer = setTimeout(async () => {
      if (this.isActive) {
        await this.handleTimeout();
      }
    }, this.SESSION_TIMEOUT);
  }

  // Aktivität erkannt
  handleActivity() {
    if (!this.isActive) return;

    const now = Date.now();
    // Throttle - nur alle 1000ms aktivieren um Performance zu schonen
    if (now - this.lastActivity > 1000) {
      this.lastActivity = now;
      this.resetTimer();
    }
  }

  // Tab-Wechsel oder Browser minimiert
  handleVisibilityChange() {
    if (!this.isActive) return;

    if (document.hidden) {
      // Tab ist nicht sichtbar - Timer weiter laufen lassen
    } else {
      // Tab ist wieder sichtbar - als Aktivität werten
      this.handleActivity();
    }
  }

  // Browser/Tab wird geschlossen
  handleBeforeUnload() {
    // Optional: Session-Daten cleanup
    this.stopSession();
  }

  // Session-Timeout behandeln
  async handleTimeout() {
    this.stopSession();

    try {
      await authService.signOut();
    } catch (error) {
      console.error("Error during timeout logout:", error);
    }

    if (this.callbacks.onTimeout) {
      this.callbacks.onTimeout();
    }
  }

  // Verbleibende Zeit abrufen
  getRemainingTime() {
    if (!this.isActive) return 0;

    const elapsed = Date.now() - this.lastActivity;
    const remaining = Math.max(0, this.SESSION_TIMEOUT - elapsed);
    return Math.ceil(remaining / 1000); // in Sekunden
  }

  // Status prüfen
  isSessionActive() {
    return this.isActive;
  }

  // Test-Modus Status abrufen
  isTestMode() {
    return this.TEST_MODE;
  }

  // Session-Zeiten abrufen (für Debugging)
  getSessionTimes() {
    return {
      timeout: this.SESSION_TIMEOUT / 1000,
      warning: this.WARNING_TIME / 1000,
      isTestMode: this.TEST_MODE,
    };
  }
}

// Singleton Pattern
export const sessionManager = new SessionManager();
