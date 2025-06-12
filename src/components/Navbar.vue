<template>
  <nav class="navbar" role="navigation" aria-label="Hauptnavigation">
    <div class="navbar-left">
      <router-link to="/" class="logo-link" aria-label="Zur Startseite">
        <img
          src="./images/logo_ffgelz14.png"
          alt="Logo der Freiwilligen Feuerwehr Gelsenkirchen Löschzug 14"
          class="logo"
        />
      </router-link>
      <span class="emergency" role="alert" aria-live="polite"
        >Im Notfall: 112</span
      >
    </div>
    <div class="navbar-right">
      <router-link to="/" class="nav-item" aria-current="page"
        >Home</router-link
      >
      <router-link to="/uber-uns" class="nav-item">Über uns</router-link>
      <div class="dropdown">
        <button
          class="nav-item dropdown-button"
          aria-expanded="false"
          aria-haspopup="true"
          @keydown.enter="toggleDropdown"
          @keydown.space="toggleDropdown"
          @keydown.esc="closeDropdown"
        >
          Löschzug
          <svg
            class="arrow-down"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div
          class="dropdown-content"
          role="menu"
          aria-label="Löschzug Untermenü"
        >
          <router-link
            to="/loschzug/einsatzabteilung"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            Einsatzabteilung
          </router-link>
          <router-link
            to="/loschzug/jugendfeuerwehr"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            Jugendfeuerwehr
          </router-link>
          <router-link
            to="/loschzug/dekon-einheit"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            Dekon-Einheit
          </router-link>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="nav-item dropdown-button"
          aria-expanded="false"
          aria-haspopup="true"
          @keydown.enter="toggleDropdown"
          @keydown.space="toggleDropdown"
          @keydown.esc="closeDropdown"
        >
          Technik
          <svg
            class="arrow-down"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div
          class="dropdown-content"
          role="menu"
          aria-label="Technik Untermenü"
        >
          <router-link
            to="/technik/14-mtf-01"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-MTF-01
          </router-link>
          <router-link
            to="/technik/14-hlf-01"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-HLF-01
          </router-link>
          <router-link
            to="/technik/14-lf-02"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-LF-02
          </router-link>
          <router-link
            to="/technik/14-dekon-01"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-DEKON-01
          </router-link>
          <router-link
            to="/technik/14-dekon-02"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-DEKON-02
          </router-link>
        </div>
      </div>
      <router-link to="/kontakt" class="nav-item">Kontakt</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  background-color: rgb(255, 0, 0);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  height: 95px;
  width: auto;
}

.emergency {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
}

.nav-item:hover,
.nav-item:focus {
  color: #f1f1f1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  outline: none;
  text-decoration: underline;
}

/* Nur für Tastaturnavigation den Fokus-Outline zeigen */
.nav-item:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ff0000;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content .dropdown-item {
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content .dropdown-item:hover,
.dropdown-content .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  text-decoration: underline;
}

/* Nur für Tastaturnavigation den Fokus-Outline zeigen */
.dropdown-content .dropdown-item:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: -2px;
}

.dropdown:hover .dropdown-content,
.dropdown:focus-within .dropdown-content {
  display: block;
}

.dropdown-button {
  display: flex;
  align-items: center;
  gap: 5px;
}

.arrow-down {
  transition: transform 0.2s ease;
}

.dropdown:hover .arrow-down,
.dropdown:focus-within .arrow-down {
  transform: rotate(180deg);
}

.logo-link:hover,
.logo-link:focus {
  background-color: transparent;
  outline: none;
}

/* Verbesserte Kontraste für Text */
.nav-item,
.dropdown-item {
  font-size: 1.1rem;
  font-weight: 600;
}

/* Skip-Link für Tastaturnavigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #ffffff;
  color: #ff0000;
  padding: 8px;
  z-index: 1001;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 0;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-right {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .dropdown-content {
    position: static;
    width: 100%;
  }
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .nav-item:hover,
  .nav-item:focus,
  .dropdown-item:hover,
  .dropdown-item:focus {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}
</style>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleDropdown(event) {
      const button = event.target;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);

      // Fokus auf erstes Element im Dropdown setzen
      if (!isExpanded) {
        const dropdown = button.nextElementSibling;
        const firstItem = dropdown.querySelector(".dropdown-item");
        if (firstItem) firstItem.focus();
      }
    },
    closeDropdown(event) {
      const button = event.target;
      button.setAttribute("aria-expanded", "false");
    },
  },
};
</script>
