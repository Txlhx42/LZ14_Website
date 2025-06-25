<template>
  <div class="admin-login">
    <div class="login-container">
      <h1>Admin Login</h1>
      <p>Zugang zum Admin-Bereich</p>

      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="password">Passwort</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Admin-Passwort eingeben"
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <button type="submit" class="btn btn-primary">Anmelden</button>
      </form>

      <div class="back-link">
        <router-link to="/">← Zurück zur Startseite</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      // Einfache Passwort-Authentifizierung
      // In einer echten Anwendung sollte dies sicherer implementiert werden
      if (this.password === "admin123") {
        // Setze Admin-Status im localStorage
        localStorage.setItem("adminAuthenticated", "true");
        this.$router.push("/admin");
      } else {
        this.error = "Falsches Passwort";
        this.password = "";
      }
    },
  },
  mounted() {
    // Prüfe ob bereits angemeldet
    const isAuthenticated =
      localStorage.getItem("adminAuthenticated") === "true";
    if (isAuthenticated) {
      this.$router.push("/admin");
    }
  },
};
</script>

<style scoped>
.admin-login {
  padding: 2rem 0;
  margin-top: 82px;
  min-height: calc(100vh - 82px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-container {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-container h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
}

.login-container p {
  color: #666;
  margin-bottom: 2rem;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #cc0000;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.btn {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #cc0000;
  color: white;
}

.btn-primary:hover {
  background-color: #990000;
}

.back-link {
  margin-top: 2rem;
  text-align: center;
}

.back-link a {
  color: #cc0000;
  text-decoration: none;
  font-weight: 500;
}

.back-link a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .admin-login {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
  }

  .login-container {
    margin: 0 1rem;
    padding: 2rem;
  }
}
</style>
