<template>
  <div class="decon-unit">
    <h1 class="page-title">Dekon-Einheit</h1>

    <div class="content">
      <div class="image-section" aria-labelledby="unit-photo-heading">
        <h2 id="unit-photo-heading" class="visually-hidden">
          Foto der Dekon-Einheit
        </h2>
        <img
          src="https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDTH3u9eg9icKvV0eUFrq3Qo4I8JYS2Rfgst5X"
          alt="Die Dekon-Einheit des Löschzugs 14 bei einer Übung"
          class="main-image"
        />
      </div>

      <section class="intro-section" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Über die Dekon-Einheit</h2>
        <p>
          Die Dekontaminationseinheit (Dekon-Einheit) des Löschzugs 14 ist eine
          spezialisierte Einheit für die Dekontamination von Einsatzkräften und
          Zivilpersonen nach ABC-Einsätzen. Wir sind ein wichtiger Bestandteil
          des ABC-Konzepts der Feuerwehr Gelsenkirchen.
        </p>
      </section>

      <section class="tasks-section" aria-labelledby="tasks-heading">
        <h2 id="tasks-heading">Unsere Aufgaben</h2>
        <div class="tasks-grid" role="list">
          <div class="task-card" role="listitem">
            <h3>Dekontamination von Einsatzkräften</h3>
            <p>
              Professionelle Reinigung und Dekontamination von Einsatzkräften
              nach Kontakt mit gefährlichen Stoffen
            </p>
          </div>
          <div class="task-card" role="listitem">
            <h3>Dekontamination von Zivilpersonen</h3>
            <p>
              Schnelle und effektive Dekontamination von betroffenen Personen
              bei ABC-Lagen
            </p>
          </div>
          <div class="task-card" role="listitem">
            <h3>Technische Unterstützung</h3>
            <p>
              Bereitstellung und Betrieb spezieller
              Dekontaminationseinrichtungen und -ausrüstung
            </p>
          </div>
        </div>
      </section>

      <section class="equipment-section" aria-labelledby="equipment-heading">
        <h2 id="equipment-heading">Unsere Fahrzeuge</h2>
        <div class="vehicles" role="list">
          <div class="vehicle-card" role="listitem">
            <h3>14-DEKON-01</h3>
            <p>
              Gerätewagen Dekontamination Personal (GW-Dekon-P) für die
              Dekontamination von Einsatzkräften und Zivilpersonen
            </p>
            <ul aria-label="Ausstattung des 14-DEKON-01">
              <li>Dekontaminationszelt mit Duschvorrichtung</li>
              <li>Warmwasseraufbereitungsanlage</li>
              <li>Spezielle Reinigungsmittel und Ausrüstung</li>
            </ul>
          </div>
          <div class="vehicle-card" role="listitem">
            <h3>14-DEKON-02</h3>
            <p>
              Logistikfahrzeug für zusätzliche Ausrüstung und Material zur
              Unterstützung der Dekontaminationsmaßnahmen
            </p>
            <ul aria-label="Ausstattung des 14-DEKON-02">
              <li>Zusätzliche Schutzausrüstung</li>
              <li>Ersatzmaterial und Verbrauchsgüter</li>
              <li>Technische Hilfsmittel</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="training-section" aria-labelledby="training-heading">
        <h2 id="training-heading">Ausbildung und Training</h2>
        <div class="training-info" role="region">
          <p>
            Die Mitglieder der Dekon-Einheit durchlaufen eine spezielle
            Ausbildung für ABC-Einsätze und Dekontaminationsmaßnahmen.
            Regelmäßige Übungen und Fortbildungen stellen die
            Einsatzbereitschaft sicher.
          </p>
          <div
            class="training-requirements"
            aria-labelledby="requirements-heading"
          >
            <h3 id="requirements-heading">Voraussetzungen für die Mitarbeit</h3>
            <ul aria-label="Liste der Voraussetzungen">
              <li>Abgeschlossene Grundausbildung in der Feuerwehr</li>
              <li>Körperliche Eignung für das Tragen von Schutzausrüstung</li>
              <li>Bereitschaft zur regelmäßigen Aus- und Fortbildung</li>
              <li>Teamfähigkeit und Zuverlässigkeit</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.decon-unit {
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
  max-width: 800px;
  width: 100%;
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

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.task-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.task-card:hover,
.task-card:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.task-card h3 {
  color: #cc0000;
  margin-top: 0;
}

.vehicles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.vehicle-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.vehicle-card h3 {
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

.training-info {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
}

/* Hoher Kontrast Modus Unterstützung */
@media (forced-colors: active) {
  .task-card,
  .vehicle-card,
  .training-info {
    border: 1px solid CanvasText;
  }

  .task-card:hover,
  .task-card:focus-within {
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
  .image-section {
    width: 100%;
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
  .tasks-grid,
  .vehicles {
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
  .tasks-grid,
  .vehicles {
    gap: 1rem;
  }
  .task-card,
  .vehicle-card,
  .training-info {
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
  .decon-unit {
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

  .task-card:hover,
  .task-card:focus-within {
    transform: none;
  }
}
</style>

<script>
export default {
  name: "DeconUnit",
};
</script>
