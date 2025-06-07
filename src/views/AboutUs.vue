<template>
  <div class="about-us">
    <h1 class="page-title">Über uns</h1>

    <div class="content">
      <section class="intro-section">
        <h2>Willkommen beim Löschzug 14</h2>
        <p>
          Der Löschzug 14 der Freiwilligen Feuerwehr Gelsenkirchen-Horst steht
          für Engagement, Kameradschaft und professionelle Hilfe in
          Notsituationen. Seit über 140 Jahren sind wir ein wichtiger Teil der
          Sicherheitsarchitektur in unserem Stadtteil.
        </p>
      </section>

      <section class="join-section">
        <h2>Werde Teil unseres Teams</h2>
        <div class="requirements">
          <h3>Voraussetzungen</h3>
          <ul>
            <li>Mindestalter: 18 Jahre</li>
            <li>Wohnort: Gelsenkirchen oder nahe Umgebung</li>
            <li>Körperliche und geistige Eignung für den Feuerwehrdienst</li>
            <li>Bereitschaft zur regelmäßigen Teilnahme an Übungsdiensten</li>
            <li>Engagement und Teamfähigkeit</li>
          </ul>
        </div>

        <div class="benefits">
          <h3>Was wir bieten</h3>
          <ul>
            <li>Fundierte Aus- und Weiterbildung</li>
            <li>Moderne Ausrüstung und Technik</li>
            <li>Starke Gemeinschaft und Kameradschaft</li>
            <li>Sinnvolle Freizeitbeschäftigung</li>
            <li>Möglichkeit, Menschen in Notsituationen zu helfen</li>
          </ul>
        </div>

        <div class="contact-info">
          <h3>Interesse geweckt?</h3>
          <p>
            Komm gerne zu einem unserer Übungsabende vorbei! Diese finden
            regelmäßig statt:
          </p>
          <ul>
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
  margin-top: 120px; /* To account for fixed navbar */
}

.page-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  margin-bottom: 3rem;
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
}

@media (max-width: 768px) {
  .about-us {
    padding: 1rem 0;
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
}
</style>

<script>
export default {
  name: "AboutUs",
};
</script>
