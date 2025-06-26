// Security Utilities für LZ14-Website

// Input-Validierung
export const validation = {
  // E-Mail Validierung
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  // Blog-Post Titel Validierung
  isValidTitle(title) {
    return (
      title &&
      typeof title === "string" &&
      title.trim().length >= 3 &&
      title.length <= 200 &&
      !/[<>]/.test(title)
    ); // Keine HTML-Tags
  },

  // Blog-Post Inhalt Validierung
  isValidContent(content) {
    return (
      content &&
      typeof content === "string" &&
      content.trim().length >= 10 &&
      content.length <= 50000
    ); // Max 50KB
  },

  // URL Validierung für Bilder
  isValidImageUrl(url) {
    if (!url) return true; // Optional
    try {
      const validUrl = new URL(url);
      return (
        ["http:", "https:"].includes(validUrl.protocol) &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(validUrl.pathname)
      );
    } catch {
      return false;
    }
  },

  // Autor Name Validierung
  isValidAuthor(author) {
    if (!author) return true; // Optional
    return (
      typeof author === "string" &&
      author.trim().length <= 100 &&
      !/[<>]/.test(author)
    );
  },
};

// XSS-Schutz für HTML-Content
export const sanitizeHtml = (content) => {
  // Erlaubte HTML-Tags für Blog-Posts
  const allowedTags = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "br",
    "strong",
    "em",
    "u",
    "ul",
    "ol",
    "li",
    "a",
    "img",
    "blockquote",
    "div",
    "span",
  ];

  // Gefährliche Attribute entfernen
  const dangerousAttributes = [
    "onclick",
    "onload",
    "onerror",
    "style",
    "class",
  ];

  let sanitized = content;

  // Script-Tags komplett entfernen
  sanitized = sanitized.replace(/<script[^>]*>.*?<\/script>/gis, "");

  // Event-Handler entfernen
  dangerousAttributes.forEach((attr) => {
    const regex = new RegExp(`\\s${attr}\\s*=\\s*["'][^"']*["']`, "gi");
    sanitized = sanitized.replace(regex, "");
  });

  // JavaScript: URLs entfernen
  sanitized = sanitized.replace(
    /href\s*=\s*["']javascript:[^"']*["']/gi,
    'href="#"'
  );

  return sanitized;
};

// Rate Limiting (Client-seitig)
export const rateLimiter = {
  limits: new Map(),

  isAllowed(action, maxRequests = 5, timeWindow = 60000) {
    const now = Date.now();
    const key = action;

    if (!this.limits.has(key)) {
      this.limits.set(key, []);
    }

    const requests = this.limits.get(key);

    // Alte Requests entfernen
    const validRequests = requests.filter((time) => now - time < timeWindow);

    if (validRequests.length >= maxRequests) {
      return false;
    }

    validRequests.push(now);
    this.limits.set(key, validRequests);
    return true;
  },
};

// Content Security Policy Validator
export const cspValidator = {
  // Prüft ob externe URLs erlaubt sind
  isAllowedExternalUrl(url) {
    const allowedDomains = [
      "supabase.co",
      "githubusercontent.com",
      "unsplash.com",
      "pixabay.com",
      // Fügen Sie hier vertrauenswürdige Domains hinzu
    ];

    try {
      const urlObj = new URL(url);
      return allowedDomains.some((domain) => urlObj.hostname.endsWith(domain));
    } catch {
      return false;
    }
  },
};

// Error Handling ohne sensitive Daten
export const secureErrorHandler = (error, context = "") => {
  // Nur nicht-sensitive Informationen loggen
  const safeError = {
    message: error.message || "Unbekannter Fehler",
    context: context,
    timestamp: new Date().toISOString(),
    // KEINE Stack-Traces oder DB-Details
  };

  console.error("Secure Error:", safeError);

  // Für Produktionsumgebung: Sende nur generische Meldungen
  const isProduction = import.meta.env.PROD;

  if (isProduction) {
    return "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
  }

  return error.message;
};

// Session Security
export const sessionSecurity = {
  // Prüft Session-Gültigkeit
  isValidSession(user) {
    if (!user) return false;

    // Prüfe ob Session nicht zu alt ist (24h)
    const sessionAge = Date.now() - new Date(user.last_sign_in_at).getTime();
    const maxAge = 24 * 60 * 60 * 1000; // 24 Stunden

    return sessionAge < maxAge;
  },

  // Sichere Session-Parameter
  getSecureSessionConfig() {
    return {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false, // Verhindert Session-Hijacking über URL
    };
  },
};
