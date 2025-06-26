<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Löschzug 14 – Horst</h1>
        <button
          class="scroll-down"
          @click="scrollToContent"
          aria-label="Nach unten scrollen"
        >
          <svg
            class="arrow"
            aria-hidden="true"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
          >
            <polygon
              fill="#fff"
              points="11 16 2 7 4.1 4.9 11 11.8 17.9 4.9 20 7"
            />
          </svg>
        </button>
      </div>
    </section>
    <div ref="contentStart"></div>
    <h1 class="welcome-title">Herzlich willkommen!</h1>

    <div class="content">
      <p>
        <a
          href="https://www.gelsenkirchen.de/de/rathaus/buergerservice/feuerwehr/index.aspx"
          class="link"
          >Feuerwehr</a
        >
        und
        <a href="https://ehrenamt.gelsenkirchen.de/de/default.aspx" class="link"
          >Ehrenamt</a
        >
        haben in
        <a href="https://de.wikipedia.org/wiki/Gelsenkirchen-Horst" class="link"
          >Gelsenkirchen-Horst</a
        >
        eine lange Tradition. Bereits im Jahr 1879 wurde in Horst die erste
        Freiwillige Feuerwehr als eingetragener Verein gegründet. Nachfolger
        dieser ersten ehrenamtlichen Löscheinheit ist der heutige Löschzug 14 –
        Horst der
        <a
          href="https://www.gelsenkirchen.de/de/rathaus/buergerservice/feuerwehr/Freiwillige_Feuerwehr.aspx"
          class="link"
          >Freiwilligen Feuerwehr Gelsenkirchen</a
        >entstanden.
      </p>

      <p>Der Löschzug 14 besteht aktuell aus vier Teileinheiten:</p>

      <div class="unit-box red">
        <router-link to="/loschzug/einsatzabteilung" class="unit-link">
          <h2>Löschzug (LZ14)</h2>
        </router-link>
      </div>

      <p>
        Zunächst aus der
        <router-link to="/loschzug/einsatzabteilung" class="link"
          >Einsatzabteilung</router-link
        >, die zur Zeit aus über 40 aktiven, ehrenamtlichen Feuerwehrangehörigen
        besteht. Sie ist seit 2006 im Feuerwehrhaus am
        <a href="https://maps.app.goo.gl/rxRhnE4gPeLUbDV3A" class="link"
          >Kampstraße 1 in Gelsenkirchen-Horst</a
        >
        stationiert.
      </p>

      <div class="unit-box orange">
        <router-link to="/loschzug/jugendfeuerwehr" class="unit-link">
          <h2>Jugendfeuerwehr (JF14)</h2>
        </router-link>
      </div>

      <p>
        Dem Löschzug 14 ist eine Gruppe der
        <a
          href="https://www.gelsenkirchen.de/de/rathaus/buergerservice/feuerwehr/Jugendfeuerwehr/"
          class="link"
          >Jugendfeuerwehr Gelsenkirchen</a
        >
        angegliedert. Die
        <router-link to="/loschzug/jugendfeuerwehr" class="link"
          >Jugendgruppe 14 – Horst</router-link
        >, die 1989 gegründet wurde und die ebenfalls in der Kampstraße 1
        beheimatet ist, besteht zur Zeit aus über 20 Jugendlichen im Alter von
        10 bis 18 Jahren.
      </p>

      <div class="unit-box green">
        <router-link to="/loschzug/dekon-einheit" class="unit-link">
          <h2>Dekon-Einheit</h2>
        </router-link>
      </div>

      <p>
        Die Dekontamination von Einsatzkräften und Zivilpersonen ist eine
        Spezialaufgabe des Löschzuges 14. Sie ist in einer eigenen
        Untergliederung der Einsatzabteilung, der
        <router-link to="/loschzug/dekon-einheit" class="link"
          >Dekon-Einheit</router-link
        >, organisiert.
      </p>

      <div class="unit-box brown">
        <router-link to="/loschzug/ehrenabteilung" class="unit-link">
          <h2>Ehrenabteilung</h2>
        </router-link>
      </div>

      <p>
        Für diejenigen Feuerwehrangehörigen, die nach langer Dienstzeit aus
        ihrem Ehrenamt beim Löschzug 14 ausscheiden, gibt es schließlich noch
        die
        <router-link to="/loschzug/ehrenabteilung" class="link"
          >Ehrenabteilung</router-link
        >. Sie ermöglicht die Aufrechterhaltung des Kontakts zum Löschzug auch
        nach dem Ausscheiden aus dem aktiven Feuerwehrdienst.
      </p>

      <div class="recruitment-section">
        <h2>Noch nicht dabei?</h2>
        <p>
          Die Freiwillige Feuerwehr Gelsenkirchen sucht Verstärkung! Bei
          Interesse an der Mitwirkung in einem ebenso fordernden und spannenden
          wie auch vielfältigen und verantwortungsvollen Umfeld mit zahlreichen
          Fort- und Weiterbildungsmöglichkeiten freuen wir uns über eine
          Nachricht. Das "Reinschnuppern" ins Ehrenamt Feuerwehr ist nach
          Absprache jederzeit möglich. Wie genau das geht, haben wir in der
          Rubrik
          <a href="/uber-uns" class="link">Über uns</a> beschrieben.
        </p>

        <div class="signature">
          <p>Die Zugführung 14</p>
          <p>Irgend ein Name, und noch ein Name</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  position: relative;
}

.hero {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  margin-top: -82px;
  padding: 0;
  padding-top: 82px;
  border: none !important;
  background: none;
}
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDCm7QouwO6QLD8xAudoKit9Mn3v7hXlPZIWeB");
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(204, 0, 0, 0.85);
  z-index: 2;
}
.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 10vh;
}
.hero-title {
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  word-break: break-word;
  line-height: 1.1;
}
.scroll-down {
  background: none;
  border: none;
  width: auto;
  height: auto;
  box-shadow: none;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.arrow {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
}
.scroll-down:hover .arrow {
  animation: arrow-bounce 1.5s infinite;
}
@keyframes arrow-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .arrow {
    width: 28px;
    height: 28px;
  }
  .hero-content {
    padding-top: 2vh;
  }
  .recruitment-section {
    margin-bottom: 2.5rem;
  }
}
@media (max-width: 400px) {
  .hero-title {
    font-size: 1.3rem;
  }
  .arrow {
    width: 20px;
    height: 20px;
  }
}

.welcome-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
  margin-top: 120px;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

p {
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #000000;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.link {
  color: #cc0000;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.unit-box {
  padding: 2.5rem;
  margin: 2rem auto;
  border-radius: 6px;
  text-align: center;
  max-width: 600px;
  min-height: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.unit-box.red,
.unit-box.red:hover {
  background-color: #cc0000;
}

.unit-box.green,
.unit-box.green:hover {
  background-color: #00cc00;
}

.unit-box.orange,
.unit-box.orange:hover {
  background-color: #ff6b00;
}

.unit-box.brown,
.unit-box.brown:hover {
  background-color: #8b4513;
}

.unit-link {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  color: white !important;
}

.unit-link:hover,
.unit-link:focus,
.unit-link:active,
.router-link-active,
.router-link-exact-active {
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;
}

.unit-box h2 {
  color: white;
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .home {
    padding: 2rem 0;
  }

  .welcome-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .home {
    padding: 2rem 0;
  }
}

@media (max-width: 600px) {
  .home {
    margin-top: 60px;
  }
}

.recruitment-section {
  margin-top: 4rem;
  padding: 2rem;
  background-color: rgba(204, 0, 0, 0.15);
  border-radius: 6px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.recruitment-section h2 {
  color: #000000;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  background: none !important;
  background-color: transparent !important;
}

.signature {
  margin-top: 2rem;
  text-align: right;
  font-style: italic;
  background: none !important;
  background-color: transparent !important;
}

.signature p {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  background: none !important;
  background-color: transparent !important;
}

.recruitment-section p {
  background: none !important;
  background-color: transparent !important;
}
</style>

<script>
export default {
  name: "Home",
  methods: {
    scrollToContent() {
      const el = this.$refs.contentStart;
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90; // 90px Offset für Navbar
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
