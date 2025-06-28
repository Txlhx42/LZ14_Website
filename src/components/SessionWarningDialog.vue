<template>
  <div v-if="visible" class="session-warning-overlay">
    <div class="session-warning-dialog">
      <div class="warning-icon">⚠️</div>

      <h2>Session läuft ab</h2>

      <p class="warning-text">
        Ihre Admin-Session läuft in <strong>{{ countdown }}</strong> Sekunden
        ab.
        <br />
        Drücken Sie "Session verlängern", um angemeldet zu bleiben.
      </p>

      <div class="warning-actions">
        <button @click="extendSession" class="btn btn-primary extend-btn">
          Session verlängern
        </button>

        <button @click="logoutNow" class="btn btn-secondary logout-btn">
          Jetzt abmelden
        </button>
      </div>

      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressWidth + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionWarningDialog",
  data() {
    return {
      visible: false,
      countdown: 10,
      progressWidth: 100,
      countdownInterval: null,
    };
  },
  methods: {
    show() {
      this.visible = true;
      this.countdown = 10;
      this.progressWidth = 100;
      this.startCountdown();
    },

    hide() {
      this.visible = false;
      this.stopCountdown();
    },

    startCountdown() {
      this.countdownInterval = setInterval(() => {
        this.countdown--;
        this.progressWidth = (this.countdown / 10) * 100;

        if (this.countdown <= 0) {
          this.stopCountdown();
          this.$emit("timeout");
        }
      }, 1000);
    },

    stopCountdown() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }
    },

    extendSession() {
      this.hide();
      this.$emit("extend");
    },

    logoutNow() {
      this.hide();
      this.$emit("logout");
    },
  },

  beforeUnmount() {
    this.stopCountdown();
  },
};
</script>

<style scoped>
.session-warning-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.session-warning-dialog {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 90%;
  text-align: center;
  animation: slideIn 0.3s ease;
}

.warning-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.session-warning-dialog h2 {
  color: #cc0000;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.warning-text {
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.warning-text strong {
  color: #cc0000;
  font-size: 1.1em;
}

.warning-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;
}

.btn-primary {
  background-color: #cc0000;
  color: white;
}

.btn-primary:hover {
  background-color: #990000;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.progress-bar {
  height: 4px;
  background-color: #e9ecef;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #cc0000;
  transition: width 1s linear;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 600px) {
  .session-warning-dialog {
    padding: 1.5rem;
    margin: 1rem;
  }

  .warning-actions {
    flex-direction: column;
  }

  .btn {
    min-width: auto;
  }
}
</style>
