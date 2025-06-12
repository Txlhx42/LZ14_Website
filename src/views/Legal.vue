<template>
  <div class="legal">
    <h1 class="page-title">Rechtliches</h1>

    <div class="content">
      <section class="disclaimer" aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" class="visually-hidden">
          Haftungsausschluss
        </h2>
        <div class="notice-box">
          <p>
            Diese Seite ist keine offizielle Seite der
            <a
              href="https://www.gelsenkirchen.de"
              target="_blank"
              rel="noopener noreferrer"
              >Stadt Gelsenkirchen</a
            >
            oder der
            <a
              href="https://www.gelsenkirchen.de/de/rathaus/buergerservice/feuerwehr/"
              target="_blank"
              rel="noopener noreferrer"
              >Feuerwehr Gelsenkirchen</a
            >. Bei Angelegenheiten, welche diese direkt betreffen, wenden Sie
            sich bitte direkt an die entsprechenden Stellen.
          </p>
        </div>
      </section>

      <section class="provider" aria-labelledby="provider-heading">
        <h2 id="provider-heading">Diensteanbieter</h2>
        <address>
          Freiwillige Feuerwehr Gelsenkirchen<br />
          Löschzug 14 - Horst<br />
          Kampstraße 1<br />
          45899 Gelsenkirchen<br />
          Deutschland
        </address>
      </section>

      <section class="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Kontaktmöglichkeiten</h2>
        <p>
          <strong>E-Mail-Adresse:</strong><br />
          <a href="mailto:fflz14zugfuehrer@gelsenkirchen.de"
            >fflz14zugfuehrer@gelsenkirchen.de</a
          >
        </p>
      </section>

      <section class="privacy" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">Datenschutz</h2>
        <p>
          Diese Website verwendet keine Cookies und speichert keine
          personenbezogenen Daten. Es werden keine Tracking-Tools oder
          Analyse-Software eingesetzt.
        </p>
        <p>
          Bei der Kontaktaufnahme per E-Mail werden die mitgeteilten Daten
          ausschließlich für die Bearbeitung der Anfrage verwendet und nicht an
          Dritte weitergegeben.
        </p>
      </section>

      <section class="copyright" aria-labelledby="copyright-heading">
        <h2 id="copyright-heading">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section class="liability" aria-labelledby="liability-heading">
        <h2 id="liability-heading">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section class="links" aria-labelledby="links-heading">
        <h2 id="links-heading">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal {
  padding: 2rem 0;
  margin-top: 120px;
}

.content {
  width: 800px;
  margin: 0 auto;
  padding: 0;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #cc0000;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
}

.notice-box {
  background-color: #fff3e0;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #cc0000;
  margin-bottom: 2rem;
}

.notice-box p {
  margin-bottom: 0;
}

address {
  font-style: normal;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

a {
  color: #cc0000;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover,
a:focus {
  text-decoration: underline;
  color: #990000;
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .notice-box {
    border: 2px solid CanvasText;
  }
}

@media (max-width: 850px) {
  .content {
    width: 90%;
    padding: 0 20px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>

<script>
export default {
  name: "Legal",
};
</script>
