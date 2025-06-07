<template>
  <nav class="navbar">
    <div class="navbar-left">
      <a href="https://lz14.de" class="logo-link">
        <img
          src="./images/logo_ffgelz14.png"
          alt="FF Gelz 14 Logo"
          class="logo"
        />
      </a>
      <span class="emergency">Im Notfall: 112</span>
    </div>
    <div class="navbar-right">
      <a href="/" class="nav-item">Home</a>
      <a href="/uber-uns" class="nav-item">Über uns</a>
      <div class="dropdown">
        <button class="nav-item dropdown-button">
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
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="dropdown-content">
          <a href="/loschzug/einsatzabteilung">Einsatzabteilung</a>
          <a href="/loschzug/jugendfeuerwehr">Jugendfeuerwehr</a>
          <a href="/loschzug/dekon-einheit">Dekon-Einehit</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="nav-item dropdown-button">
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
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="dropdown-content">
          <a href="/technik/14-mtf-01">14-MTF-01</a>
          <a href="/technik/14-hlf-01">14-HLF-01</a>
          <a href="/technik/14-lf-02">14-LF-02</a>
          <a href="/technik/14-dekon-01">14-DEKON-01</a>
          <a href="/technik/14-dekon-02">14-DEKON-02</a>
        </div>
      </div>
      <a href="/kontakt" class="nav-item">Kontakt</a>
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
}

.nav-item:hover {
  color: #f1f1f1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
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

.dropdown-content a {
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.dropdown:hover .dropdown-content {
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

.dropdown:hover .arrow-down {
  transform: rotate(180deg);
}

.logo-link:hover {
  background-color: transparent;
}
</style>

<script>
export default {
  name: "Navbar",
};
</script>
