<template>
  <div class="elder-department" aria-labelledby="page-title">
    <h1 id="page-title" class="page-title">Ehrenabteilung</h1>
    <div class="content">
      <section class="intro-section" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Über die Ehrenabteilung</h2>
        <p>
          Die Ehrenabteilung des Löschzugs 14 ist ein wichtiger Bestandteil
          unserer Feuerwehrfamilie. Sie besteht aus ehemaligen aktiven
          Mitgliedern, die nach langjährigem, engagiertem Dienst aus Alters-
          oder Gesundheitsgründen aus dem aktiven Einsatzdienst ausgeschieden
          sind. Die Kameradinnen und Kameraden der Ehrenabteilung bleiben dem
          Löschzug weiterhin eng verbunden und bringen ihre Erfahrung und
          Kameradschaft in das Feuerwehrleben ein.
        </p>
      </section>
      <section class="tasks-section" aria-labelledby="tasks-heading">
        <h2 id="tasks-heading">Unsere Werte & Aufgaben</h2>
        <ul
          class="values-list"
          aria-label="Werte und Aufgaben der Ehrenabteilung"
        >
          <li>Pflege der Kameradschaft und Tradition</li>
          <li>Unterstützung bei Veranstaltungen und Festen</li>
          <li>
            Weitergabe von Wissen und Erfahrung an die jüngeren Generationen
          </li>
          <li>Teilnahme an gemeinsamen Aktivitäten des Löschzugs</li>
        </ul>
      </section>
      <section class="activities-section" aria-labelledby="activities-heading">
        <h2 id="activities-heading">Aktivitäten & Gemeinschaft</h2>
        <p>
          Die Ehrenabteilung trifft sich regelmäßig zu geselligen Runden,
          Ausflügen und besonderen Anlässen. Der Austausch zwischen den
          Generationen ist uns besonders wichtig – so bleibt die Geschichte und
          das Wissen des Löschzugs lebendig.
        </p>
      </section>
      <section class="join-section" aria-labelledby="join-heading">
        <h2 id="join-heading">Kontakt & Mitmachen</h2>
        <p>
          Sie möchten mehr über die Ehrenabteilung erfahren oder Kontakt
          aufnehmen? Sprechen Sie uns gerne an – wir freuen uns über jedes
          Interesse und den Austausch mit ehemaligen und aktiven
          Feuerwehrkameradinnen und -kameraden!
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.elder-department {
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

section {
  margin-bottom: 4rem;
}

h2 {
  color: #cc0000;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
}

.values-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.values-list li {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: #333;
}

/* Verbesserter Fokus-Stil für Tastaturnavigation */
*:focus {
  outline: 2px solid #cc0000;
  outline-offset: 2px;
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
}

@media (max-width: 600px) {
  .elder-department {
    margin-top: 60px;
  }
  .content {
    width: 100%;
    padding: 0 6px;
  }
  .page-title {
    font-size: 2.1rem;
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
  section {
    margin-bottom: 2rem;
  }
  p,
  .values-list li {
    font-size: 0.98rem;
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
  name: "ElderDepartment",
};
</script>
