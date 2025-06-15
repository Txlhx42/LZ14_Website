<template>
  <div class="youth-department">
    <h1 class="page-title">Jugendfeuerwehr</h1>

    <div class="content">
      <div class="image-section" aria-labelledby="group-photo-heading">
        <h2 id="group-photo-heading" class="visually-hidden">Gruppenfoto</h2>
        <img
          src="https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDbuUfcVrGgYTZ7H4S2CR5ov1k96qwFKiPJXOn"
          alt="Gruppenfoto der Jugendfeuerwehr des Löschzugs 14"
          class="main-image"
        />
      </div>

      <section class="intro-section" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Unsere Jugendfeuerwehr</h2>
        <p>
          Die Jugendfeuerwehr des Löschzugs 14 bietet Jugendlichen zwischen 10
          und 17 Jahren die Möglichkeit, die spannende Welt der Feuerwehr
          kennenzulernen. In einer tollen Gemeinschaft lernen die Jugendlichen
          nicht nur feuerwehrtechnische Grundlagen, sondern entwickeln auch
          wichtige soziale Kompetenzen.
        </p>
      </section>

      <section class="activities-section" aria-labelledby="activities-heading">
        <h2 id="activities-heading">Das erwartet dich bei uns</h2>
        <div class="activities-list" role="list">
          <div class="activity-card" role="listitem">
            <h3>Feuerwehrtechnische Ausbildung</h3>
            <p>
              Grundlegende Feuerwehrtechniken, Umgang mit Geräten, Erste Hilfe
              und vieles mehr
            </p>
          </div>
          <div class="activity-card" role="listitem">
            <h3>Spiel und Spaß</h3>
            <p>
              Gemeinsame Ausflüge, Zeltlager, Spiele und andere
              Freizeitaktivitäten
            </p>
          </div>
          <div class="activity-card" role="listitem">
            <h3>Teamarbeit</h3>
            <p>
              Zusammenhalt, Kameradschaft und gemeinsames Lernen in der Gruppe
            </p>
          </div>
        </div>
      </section>

      <section class="join-section" aria-labelledby="join-heading">
        <h2 id="join-heading">Mitmachen</h2>
        <div
          class="requirements"
          role="region"
          aria-labelledby="requirements-heading"
        >
          <h3 id="requirements-heading">Voraussetzungen</h3>
          <ul aria-label="Liste der Voraussetzungen">
            <li>Alter zwischen 10 und 17 Jahren</li>
            <li>Wohnort in Gelsenkirchen oder naher Umgebung</li>
            <li>Interesse an der Feuerwehr</li>
            <li>Bereitschaft zum regelmäßigen Dienst</li>
          </ul>
        </div>

        <div
          class="meeting-info"
          role="region"
          aria-labelledby="meeting-heading"
        >
          <h3 id="meeting-heading">Unsere Treffen</h3>
          <ul aria-label="Informationen zu den Treffen">
            <li>Jeden Donnerstag</li>
            <li>Von 18:00 bis 20:00 Uhr</li>
            <li>Feuerwehrhaus Kampstraße 1, 45899 Gelsenkirchen-Horst</li>
          </ul>
          <p class="contact-note" role="note">
            Interessiert? Komm gerne zu einem unserer Treffen vorbei und
            schnuppere in die Jugendfeuerwehr hinein! Wir freuen uns auf dich!
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.youth-department {
  padding: 2rem 0;
  margin-top: 82px;
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

.activities-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.activity-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.activity-card:hover,
.activity-card:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.activity-card h3 {
  color: #cc0000;
  margin-top: 0;
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
.meeting-info {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-note {
  font-weight: 500;
  color: #cc0000;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 2px solid #cc0000;
  border-radius: 4px;
  background-color: #fff;
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .activity-card,
  .requirements,
  .meeting-info {
    border: 1px solid CanvasText;
  }

  .contact-note {
    border: 2px solid CanvasText;
  }

  .activity-card:hover,
  .activity-card:focus-within {
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

  .activities-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .content {
    width: 100%;
    padding: 0 6px;
  }
  .image-section {
    width: 100%;
    margin: 1rem 0 2rem 0;
  }
  .main-image {
    border-radius: 6px;
  }
  .page-title {
    font-size: 2.1rem;
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
  h3 {
    font-size: 1rem;
    margin: 1rem 0 0.5rem;
  }
  .activities-list {
    gap: 1rem;
  }
  .activity-card,
  .requirements,
  .meeting-info {
    padding: 1rem;
  }
  .rank-image {
    width: 28px;
    height: 28px;
  }
  p,
  li {
    font-size: 0.98rem;
  }
  .youth-department {
    margin-top: 60px;
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

  .activity-card:hover,
  .activity-card:focus-within {
    transform: none;
  }
}
</style>

<script>
export default {
  name: "YouthFireDepartment",
};
</script>
