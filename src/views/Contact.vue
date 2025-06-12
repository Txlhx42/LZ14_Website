<template>
  <div class="contact">
    <h1 class="page-title">Kontakt</h1>

    <div class="content">
      <section class="contact-intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" class="visually-hidden">Einleitung</h2>
        <p class="intro-text">
          Zögern Sie nicht, uns telefonisch oder per Mail zu kontaktieren oder
          uns eine Nachricht über das Formular zu senden.
        </p>
        <p class="emergency-notice" role="alert">
          <strong>Im Notfall wählen Sie immer die 112!</strong>
        </p>
      </section>

      <section class="contact-details">
        <div class="address" aria-labelledby="address-heading">
          <h2 id="address-heading">Adresse</h2>
          <address>
            Kampstraße 1<br />
            45899 Gelsenkirchen
          </address>
        </div>

        <div class="contact-methods" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Kontakt</h2>
          <p>
            <a
              href="mailto:fflz14zugfuehrer@gelsenkirchen.de"
              class="email-link"
              aria-label="E-Mail an den Löschzug 14 senden"
            >
              fflz14zugfuehrer@gelsenkirchen.de
            </a>
            <span class="note" aria-label="Löschzug 14">(LZ 14)</span>
          </p>
          <p class="phone">
            <a
              href="tel:+492099582907"
              aria-label="Telefonnummer des Löschzugs 14"
            >
              +49 209 9582907
            </a>
          </p>
        </div>

        <div class="opening-hours" aria-labelledby="hours-heading">
          <h2 id="hours-heading">Dienstzeiten</h2>
          <table class="schedule" aria-label="Wöchentliche Dienstzeiten">
            <tbody>
              <tr>
                <th scope="row">Montag (LZ14)</th>
                <td>19:30-22:00</td>
              </tr>
              <tr>
                <th scope="row">Dienstag</th>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <th scope="row">Mittwoch (JF14)</th>
                <td>18:00-20:00</td>
              </tr>
              <tr>
                <th scope="row">Donnerstag</th>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <th scope="row">Freitag</th>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <th scope="row">Samstag</th>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <th scope="row">Sonntag</th>
                <td>Geschlossen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact {
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

.contact-intro {
  text-align: center;
  margin-bottom: 3rem;
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

.intro-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
}

.emergency-notice {
  font-size: 1.3rem;
  font-weight: bold;
  color: #cc0000;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 2px solid #cc0000;
  border-radius: 4px;
  background-color: #fff;
}

.contact-details {
  display: grid;
  gap: 3rem;
}

h2 {
  color: #cc0000;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

address,
.contact-methods p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  font-style: normal;
}

.email-link,
.phone a {
  color: #cc0000;
  text-decoration: none;
  transition: color 0.2s;
  border-bottom: 1px solid transparent;
}

.email-link:hover,
.email-link:focus,
.phone a:hover,
.phone a:focus {
  color: #990000;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

.note {
  color: #666;
  font-size: 0.9em;
  margin-left: 0.5rem;
}

.phone {
  margin-top: 0.5rem;
}

table.schedule {
  width: 100%;
  border-collapse: collapse;
}

.schedule th,
.schedule td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.schedule th {
  font-weight: 500;
  color: #333;
}

.schedule td {
  color: #666;
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .emergency-notice {
    border: 2px solid CanvasText;
  }

  .email-link:hover,
  .email-link:focus,
  .phone a:hover,
  .phone a:focus {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
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

  .contact-details {
    gap: 2rem;
  }

  .schedule {
    font-size: 0.9rem;
  }
}

/* Reduzierte Bewegung für Benutzer, die dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>

<script>
export default {
  name: "Contact",
};
</script>
