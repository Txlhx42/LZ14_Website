<template>
  <nav
    :class="['navbar', { 'navbar-home': $route.path === '/' }]"
    role="navigation"
    aria-label="Hauptnavigation"
  >
    <div class="navbar-left">
      <router-link to="/" class="logo-link" aria-label="Zur Startseite">
        <img
          src="https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDdnvAbKh1igdeYP13TlByhZjpRH6J4trCaIDq"
          alt="Logo der Freiwilligen Feuerwehr Gelsenkirchen Löschzug 14"
          class="logo"
        />
      </router-link>
      <span class="emergency" role="alert" aria-live="polite"
        >Im Notfall: 112</span
      >
    </div>
    <div class="navbar-right desktop-menu">
      <router-link to="/" class="nav-item" aria-current="page"
        >Home</router-link
      >
      <router-link to="/uber-uns" class="nav-item">Über uns</router-link>
      <router-link to="/aktuelles" class="nav-item">Aktuelles</router-link>
      <div class="dropdown">
        <button
          class="nav-item dropdown-button"
          :aria-expanded="openDropdown === 'loeschzug' ? 'true' : 'false'"
          aria-haspopup="true"
          @click="toggleDropdown('loeschzug')"
          @keydown.enter="toggleDropdown('loeschzug')"
          @keydown.space="toggleDropdown('loeschzug')"
          @keydown.esc="closeDropdown()"
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
          v-show="openDropdown === 'loeschzug'"
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
          <router-link
            to="/loschzug/ehrenabteilung"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            Ehrenabteilung
          </router-link>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="nav-item dropdown-button"
          :aria-expanded="openDropdown === 'technik' ? 'true' : 'false'"
          aria-haspopup="true"
          @click="toggleDropdown('technik')"
          @keydown.enter="toggleDropdown('technik')"
          @keydown.space="toggleDropdown('technik')"
          @keydown.esc="closeDropdown()"
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
          v-show="openDropdown === 'technik'"
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
            to="/technik/14-hlf-10-01"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-HLF-10-01
          </router-link>
          <router-link
            to="/technik/14-lfkats-02"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-LF20KatS-01
          </router-link>
          <router-link
            to="/technik/14-dekon-p-01"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-DEKON-P-01
          </router-link>
          <router-link
            to="/technik/14-dekon-p-02"
            role="menuitem"
            class="dropdown-item"
            tabindex="-1"
          >
            14-DEKON-P-02
          </router-link>
        </div>
      </div>
      <router-link to="/kontakt" class="nav-item">Kontakt</router-link>
    </div>
    <!-- Mobile Hamburger Icon -->
    <button
      class="hamburger"
      :class="{ open: mobileMenuOpen }"
      @click="mobileMenuOpen = true"
      aria-label="Menü öffnen"
    >
      <span></span><span></span><span></span>
    </button>
    <!-- Mobile Overlay Menu -->
    <transition name="overlay-fade">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay animate-overlay">
        <div class="mobile-menu-header">
          <router-link to="/" class="logo-link" aria-label="Zur Startseite">
            <img
              src="https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDdnvAbKh1igdeYP13TlByhZjpRH6J4trCaIDq"
              alt="Logo der Freiwilligen Feuerwehr Gelsenkirchen Löschzug 14"
              class="logo"
            />
          </router-link>
          <button
            class="close-menu"
            @click="mobileMenuOpen = false"
            aria-label="Menü schließen"
          >
            Menü schließen <span class="close-x">&#10005;</span>
          </button>
        </div>
        <ul class="mobile-menu-list">
          <li class="menu-animate" style="animation-delay: 0s">
            <router-link
              to="/"
              @click.native="closeMobileMenu"
              class="mobile-link"
              >Home</router-link
            >
          </li>
          <li class="menu-animate" style="animation-delay: 0.08s">
            <router-link
              to="/uber-uns"
              @click.native="closeMobileMenu"
              class="mobile-link"
              >Über uns</router-link
            >
          </li>
          <li class="menu-animate" style="animation-delay: 0.16s">
            <router-link
              to="/aktuelles"
              @click.native="closeMobileMenu"
              class="mobile-link"
              >Aktuelles</router-link
            >
          </li>
          <li class="menu-animate" style="animation-delay: 0.24s">
            <div class="mobile-dropdown">
              <button
                @click="toggleMobileDropdown('loeschzug')"
                class="mobile-dropdown-btn"
              >
                Löschzug
                <span class="dropdown-arrow-wrap">
                  <span class="dropdown-arrow-bar"></span>
                  <span class="dropdown-arrow">
                    <svg viewBox="0 0 24 24">
                      <polyline
                        points="6 9 12 15 18 9"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <ul
                v-show="mobileOpenDropdown === 'loeschzug'"
                class="mobile-dropdown-list"
              >
                <li>
                  <router-link
                    to="/loschzug/einsatzabteilung"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >Einsatzabteilung</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/loschzug/jugendfeuerwehr"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >Jugendfeuerwehr</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/loschzug/dekon-einheit"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >Dekon-Einheit</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/loschzug/ehrenabteilung"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >Ehrenabteilung</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-animate" style="animation-delay: 0.32s">
            <div class="mobile-dropdown">
              <button
                @click="toggleMobileDropdown('technik')"
                class="mobile-dropdown-btn"
              >
                Technik
                <span class="dropdown-arrow-wrap">
                  <span class="dropdown-arrow-bar"></span>
                  <span class="dropdown-arrow">
                    <svg viewBox="0 0 24 24">
                      <polyline
                        points="6 9 12 15 18 9"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <ul
                v-show="mobileOpenDropdown === 'technik'"
                class="mobile-dropdown-list"
              >
                <li>
                  <router-link
                    to="/technik/14-mtf-01"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >14-MTF-01</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/technik/14-hlf-01"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >14-HLF-01</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/technik/14-lf-02"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >14-LF-02</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/technik/14-dekon-01"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >14-DEKON-01</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/technik/14-dekon-02"
                    @click.native="closeMobileMenu"
                    class="mobile-link"
                    >14-DEKON-02</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-animate" style="animation-delay: 0.4s">
            <router-link
              to="/kontakt"
              @click.native="closeMobileMenu"
              class="mobile-link"
              >Kontakt</router-link
            >
          </li>
        </ul>
        <div class="mobile-social-links">
          <a
            href="https://www.facebook.com/LZ14GE/?locale=de_DE"
            class="mobile-social-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <path
                d="M38 12h-7a7 7 0 0 0-7 7v7h-4v7h4v13h7V33h6l2-7h-8v-4a1 1 0 0 1 1-1h7z"
                stroke="#ff0000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/loeschzug_horst/"
            class="mobile-social-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <rect
                x="16"
                y="16"
                width="24"
                height="24"
                rx="7"
                stroke="#ff0000"
                stroke-width="2.5"
                fill="none"
              />
              <path
                d="M36 28.5A6 6 0 1 1 28.5 20 6 6 0 0 1 36 28.5z"
                stroke="#ff0000"
                stroke-width="2.5"
                fill="none"
              />
              <circle cx="39" cy="19" r="1.5" fill="#ff0000" />
            </svg>
          </a>
          <a
            href="mailto:fflz14zugfuehrer@gelsenkirchen.de"
            class="mobile-social-link"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <rect
                x="14"
                y="21"
                width="28"
                height="17"
                rx="2.5"
                stroke="#ff0000"
                stroke-width="2.5"
                fill="none"
              />
              <polyline
                points="42,21 28,33 14,21"
                stroke="#ff0000"
                stroke-width="2.5"
                fill="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  background: #cc0000 !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: #fff !important;
  border-bottom: none !important;
  border-top: none !important;
}

/* Spezielle Regel für die Home-Seite */
.navbar.navbar-home::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 20px;
  background: #cc0000;
  z-index: 999;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #cc0000;
  border-bottom: none !important;
  border-top: none !important;
}

.logo {
  height: 95px;
  width: auto;
  background: #cc0000;
  border-bottom: none !important;
  border-top: none !important;
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
  transition: none;
}

.nav-item:hover,
.nav-item:focus {
  text-decoration: underline;
  background: none !important;
  color: #fff;
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
  background-color: #cc0000;
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

/* Dropdown wird jetzt durch JavaScript gesteuert */
.dropdown:focus-within .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-content,
.dropdown:focus-within .dropdown-content {
  display: block;
}

/* Fallback für Browser ohne focus-within Support */
.dropdown:focus .dropdown-content {
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
.dropdown:focus-within .arrow-down,
.dropdown:focus .arrow-down {
  transform: rotate(180deg);
}

.logo-link {
  background: #cc0000;
  border-bottom: none !important;
  border-top: none !important;
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

@media (max-width: 900px) {
  .navbar {
    padding: 0.7rem 0.7rem;
    flex-direction: row;
    align-items: center;
    min-height: 70px;
    border-bottom: none !important;
    box-shadow: none !important;
  }
  .navbar-left {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: 0;
    border-bottom: none !important;
    box-shadow: none !important;
  }
  .emergency {
    font-size: 1rem;
    margin-left: 0.7rem;
    white-space: nowrap;
  }
  .hamburger {
    display: flex;
    margin-left: auto;
    margin-right: 0;
    align-self: center;
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1.5rem;
  z-index: 1101;
  transition: background 0.2s;
}
.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background: #fff;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
@media (max-width: 900px) {
  .desktop-menu {
    display: none !important;
  }
  .hamburger {
    display: flex;
  }
}
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: #cc0000;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: overlayIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes overlayIn {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.2rem 0.3rem 0.7rem;
}
.mobile-menu-header .logo {
  height: 90px;
}
.close-menu {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  right: 1.2rem;
}
.close-x {
  font-size: 2rem;
  line-height: 1;
}
.mobile-menu-list {
  list-style: none;
  padding: 0 0.5rem;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  max-height: 80vh;
  flex: 1 1 auto;
}
.mobile-menu-list li {
  border-bottom: 1.5px solid #fff;
  margin-bottom: 0.2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.15rem;
  font-weight: bold;
  color: #fff;
  padding: 0.45rem 0 0.35rem 0.5rem;
  display: flex;
  align-items: center;
}
.mobile-menu-list li:first-child {
  border-top: 1.5px solid #fff;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mobile-link {
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  background: none !important;
}
.mobile-link.router-link-exact-active {
  text-decoration: underline;
}
.mobile-link:hover,
.mobile-link:focus {
  text-decoration: underline;
  background: none !important;
  color: #fff;
}
.mobile-dropdown {
  width: 100%;
  display: block;
}
.mobile-dropdown-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0;
  gap: 0.5rem;
  min-height: 44px;
}
.arrow {
  margin-left: 0.7rem;
  transition: transform 0.2s;
}
.arrow.open {
  transform: rotate(180deg);
}
.mobile-dropdown-list {
  list-style: none;
  padding-left: 0.7rem;
  margin: 0.2rem 0 0.2rem 0;
  border-left: none;
  margin-left: 0;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.mobile-dropdown-list li {
  border: none;
  font-size: 0.98rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
  padding: 0.18rem 0 0.18rem 0.7rem;
}
@media (max-width: 600px) {
  .mobile-menu-header {
    padding: 1.2rem 0.7rem 0.7rem 0.7rem;
  }
  .mobile-menu-list {
    padding: 0 0.7rem;
  }
  .mobile-social-links {
    gap: 1.2rem;
    padding-bottom: 3vh;
  }
  .mobile-social-link {
    width: 40px;
    height: 40px;
  }
}
.menu-animate {
  opacity: 0;
  transform: translateY(20px);
  animation: menuFadeIn 0.4s forwards;
}
@keyframes menuFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Overlay Menü Fade/Slide Animation */
.overlay-fade-enter-active {
  animation: overlayIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.overlay-fade-leave-active {
  animation: overlayOut 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes overlayOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(40px);
  }
}
.mobile-social-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  z-index: 2100;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.mobile-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
  transition: transform 0.18s;
}
.mobile-social-link:hover,
.mobile-social-link:focus {
  transform: translateY(-2px) scale(1.08);
  outline: none;
}
/* Custom Arrow Design */
.dropdown-arrow-wrap {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-right: 0.7rem;
}
.dropdown-arrow-bar {
  width: 2px;
  height: 28px;
  background: #fff;
  display: inline-block;
  border-radius: 1px;
}
.dropdown-arrow {
  display: inline-block;
  width: 28px;
  height: 28px;
  vertical-align: middle;
}
.dropdown-arrow svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      openDropdown: null,
      mobileMenuOpen: false,
      mobileOpenDropdown: null,
    };
  },
  watch: {
    $route() {
      this.openDropdown = null;
      this.mobileMenuOpen = false;
      this.mobileOpenDropdown = null;
      document.body.style.overflow = "auto";
    },
    mobileMenuOpen(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
  methods: {
    toggleDropdown(name) {
      if (this.openDropdown === name) {
        this.openDropdown = null;
      } else {
        this.openDropdown = name;
      }
    },
    closeDropdown() {
      this.openDropdown = null;
    },
    toggleMobileDropdown(name) {
      if (this.mobileOpenDropdown === name) {
        this.mobileOpenDropdown = null;
      } else {
        this.mobileOpenDropdown = name;
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      this.mobileOpenDropdown = null;
    },
  },
};
</script>
