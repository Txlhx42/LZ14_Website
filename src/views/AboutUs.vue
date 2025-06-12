<template>
  <div class="about-us">
    <h1 class="page-title">Über uns</h1>

    <div class="content">
      <div class="image-section" aria-labelledby="main-photo-heading">
        <h2 id="main-photo-heading" class="visually-hidden">Hauptbild</h2>
        <img
          src="@/components/images/fwge.jpg"
          alt="Feuerwehrhaus und Fahrzeuge der Feuerwehr Gelsenkirchen"
          class="main-image"
        />
      </div>

      <section class="intro-section" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Willkommen beim Löschzug 14</h2>
        <p>
          Der Löschzug 14 der Freiwilligen Feuerwehr Gelsenkirchen-Horst steht
          für Engagement, Kameradschaft und professionelle Hilfe in
          Notsituationen. Seit über 140 Jahren sind wir ein wichtiger Teil der
          Sicherheitsarchitektur in unserem Stadtteil.
        </p>
      </section>

      <section class="join-section" aria-labelledby="join-heading">
        <h2 id="join-heading">Werde Teil unseres Teams</h2>

        <div
          class="requirements"
          role="region"
          aria-labelledby="requirements-heading"
        >
          <h3 id="requirements-heading">Voraussetzungen</h3>
          <ul aria-label="Liste der Voraussetzungen">
            <li>Mindestalter: 18 Jahre</li>
            <li>Wohnort: Gelsenkirchen oder nahe Umgebung</li>
            <li>Körperliche und geistige Eignung für den Feuerwehrdienst</li>
            <li>Bereitschaft zur regelmäßigen Teilnahme an Übungsdiensten</li>
            <li>Engagement und Teamfähigkeit</li>
          </ul>
        </div>

        <div class="benefits" role="region" aria-labelledby="benefits-heading">
          <h3 id="benefits-heading">Was wir bieten</h3>
          <ul aria-label="Liste der Vorteile">
            <li>Fundierte Aus- und Weiterbildung</li>
            <li>Moderne Ausrüstung und Technik</li>
            <li>Starke Gemeinschaft und Kameradschaft</li>
            <li>Sinnvolle Freizeitbeschäftigung</li>
            <li>Möglichkeit, Menschen in Notsituationen zu helfen</li>
          </ul>
        </div>

        <div
          class="contact-info"
          role="region"
          aria-labelledby="contact-heading"
        >
          <h3 id="contact-heading">Interesse geweckt?</h3>
          <p>
            Komm gerne zu einem unserer Übungsabende vorbei! Diese finden
            regelmäßig statt:
          </p>
          <ul aria-label="Übungszeiten">
            <li>Jeden Montag</li>
            <li>Ab 19:30 Uhr</li>
            <li>Feuerwehrhaus Kampstraße 1, 45899 Gelsenkirchen-Horst</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-us {
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

.image-section {
  margin: 2rem auto 4rem;
  text-align: center;
  width: 800px;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

section {
  margin-bottom: 4rem;
}

h2 {
  color: #cc0000;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

h3 {
  color: #333;
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

li {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

li::before {
  content: "•";
  color: #cc0000;
  position: absolute;
  left: 0;
}

.requirements,
.benefits,
.contact-info {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.requirements:hover,
.benefits:hover,
.contact-info:hover,
.requirements:focus-within,
.benefits:focus-within,
.contact-info:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .requirements,
  .benefits,
  .contact-info {
    border: 1px solid CanvasText;
  }

  .requirements:hover,
  .benefits:hover,
  .contact-info:hover,
  .requirements:focus-within,
  .benefits:focus-within,
  .contact-info:focus-within {
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
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  .requirements,
  .benefits,
  .contact-info {
    padding: 1rem;
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

  .requirements:hover,
  .benefits:hover,
  .contact-info:hover,
  .requirements:focus-within,
  .benefits:focus-within,
  .contact-info:focus-within {
    transform: none;
  }
}
</style>

<script>
export default {
  name: "AboutUs",
};
</script>
