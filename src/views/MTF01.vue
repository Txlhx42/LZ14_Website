<template>
  <div class="fahrzeug-seite">
    <h1 class="page-title">14-MTF-01</h1>
    <!-- Bildergalerie -->
    <div class="gallery-wrapper">
      <div class="gallery-vertical">
        <div class="gallery-main">
          <img
            :src="allImages[selectedIndex]"
            class="gallery-main-img"
            alt="MTF Hauptbild"
          />
        </div>
        <div class="gallery-thumbnails">
          <img
            v-for="(img, i) in allImages"
            :key="i"
            :src="img"
            class="gallery-side-img"
            :alt="'MTF Bild ' + (i + 1)"
            @click="selectImage(i)"
            :class="{ selected: selectedIndex === i }"
          />
        </div>
      </div>
    </div>

    <!-- Spezifikationstabelle -->
    <table class="spec-table">
      <tbody>
        <tr>
          <th>Fahrzeugtyp</th>
          <td>Mannschaftstransportfahrzeug (MTF)</td>
        </tr>
        <tr>
          <th>Fahrgestell</th>
          <td>Opel Movano F 3500</td>
        </tr>
        <tr>
          <th>Aufbau</th>
          <td>Wagener</td>
        </tr>
        <tr>
          <th>Baujahr</th>
          <td>2016</td>
        </tr>
        <tr>
          <th>Funkrufname</th>
          <td>Florian Gelsenkirchen 14-MTF-1</td>
        </tr>
        <tr>
          <th>Amt. Kennzeichen</th>
          <td>GE FW 3764</td>
        </tr>
        <tr>
          <th>Besatzung</th>
          <td>max. 8 Einsatzkräfte</td>
        </tr>
      </tbody>
    </table>

    <!-- Freitextbereich -->
    <div class="fahrzeug-text">
      <h2>Beschreibung & Nutzung</h2>
      <p>
        Das Mannschaftstransportfahrzeug (MTF) ist ein vielseitig einsetzbares
        Fahrzeug, das in erster Linie dem Transport von Einsatzkräften dient. Es
        wird genutzt, um Personal schnell und sicher zur Einsatzstelle zu
        bringen oder von dort abzuholen. Darüber hinaus kann das MTF für
        logistische Aufgaben, wie den Transport von Material, Nachschub oder zur
        Unterstützung bei größeren Einsatzlagen eingesetzt werden.
      </p>
      <p>
        Durch seine flexible Innenraumgestaltung eignet sich das MTF auch für
        den Transport von Jugendfeuerwehrgruppen, für Fahrten zu Aus- und
        Fortbildungen sowie für die Teilnahme an Veranstaltungen. Im Einsatzfall
        kann das Fahrzeug zudem als Zubringer für Spezialkräfte oder als
        Führungsfahrzeug genutzt werden. Die Ausstattung ist auf die Bedürfnisse
        der Feuerwehr abgestimmt und bietet ausreichend Platz für die Mannschaft
        und deren persönliche Ausrüstung.
      </p>
      <p>
        Das MTF ist ein unverzichtbarer Bestandteil des Fuhrparks und trägt
        maßgeblich zur Einsatzbereitschaft und Mobilität des Löschzugs bei.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const allImages = [
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDvdUNVSYcBxQ4IeKR3o5ap21rmfth67MLvUbq",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDT4bkiKg9icKvV0eUFrq3Qo4I8JYS2Rfgst5X",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDN1Fh9eiyb4vaO6NQJo5UihDBYdLI1H3TgRXK",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDeZtuOhLPiyPqY6UsIcM5ADEQS7CgRbwhedrz",
];
const selectedIndex = ref(0);
function selectImage(i) {
  selectedIndex.value = i;
}
</script>

<style scoped>
.fahrzeug-seite {
  padding: 2rem 0 3rem 0;
  min-height: 100vh;
}
.gallery-wrapper {
  max-width: 1000px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  justify-content: center;
}
.gallery-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.gallery-thumbnails {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.gallery-side-img {
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
  background: #ddd;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s;
  flex: 0 1 auto;
}
.gallery-side-img.selected {
  border: 2px solid #b00;
}
.gallery-main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.gallery-main-img {
  width: 100%;
  max-width: 900px;
  max-height: 600px;
  object-fit: contain;
  border-radius: 4px;
  background: #ddd;
  box-shadow: 0 2px 12px #0002;
}
.spec-table {
  margin: 0 auto 2rem auto;
  background: #f8f5ed;
  border-collapse: collapse;
  min-width: 400px;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px #0001;
}
.spec-table th,
.spec-table td {
  border: 1px solid #e0d8c8;
  padding: 0.6rem 1.2rem;
  text-align: left;
}
.spec-table th {
  background: #f3e9d7;
  font-weight: bold;
}
.fahrzeug-text {
  max-width: 700px;
  margin: 0 auto;
  background: #fff8ee;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
}
.fahrzeug-text h2 {
  margin-top: 0;
}
.page-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
  margin-top: 82px;
}
@media (max-width: 600px) {
  .gallery-thumbnails {
    gap: 0.7rem;
  }
  .gallery-side-img {
    width: 48%;
    min-width: 120px;
    max-width: 180px;
    height: 80px;
  }
}
</style>
