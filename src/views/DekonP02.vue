<template>
  <div class="fahrzeug-seite">
    <h1 class="page-title">14-DEKON-P-02</h1>
    <!-- Bildergalerie -->
    <div class="gallery-wrapper">
      <div class="gallery-vertical">
        <div class="gallery-main">
          <img
            :src="allImages[selectedIndex]"
            class="gallery-main-img"
            alt="Dekon-P Hauptbild"
          />
        </div>
        <div class="gallery-thumbnails">
          <img
            v-for="(img, i) in allImages"
            :key="i"
            :src="img"
            class="gallery-side-img"
            :alt="'Dekon-P Bild ' + (i + 1)"
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
          <td>Dekontaminationsfahrzeug Personen (Dekon-P)</td>
        </tr>
        <tr>
          <th>Fahrgestell</th>
          <td>Mercedes-Benz Atego 1323 AF</td>
        </tr>
        <tr>
          <th>Aufbau</th>
          <td>GFT</td>
        </tr>
        <tr>
          <th>Baujahr</th>
          <td>2018</td>
        </tr>
        <tr>
          <th>Funkrufname</th>
          <td>Florian Gelsenkirchen 14-DEKON-P-02</td>
        </tr>
        <tr>
          <th>Amtl. Kennzeichen</th>
          <td>NRW 8-5009</td>
        </tr>
        <tr>
          <th>Besatzung</th>
          <td>1/5 (Staffel)</td>
        </tr>
      </tbody>
    </table>
    <!-- Freitextbereich -->
    <div class="fahrzeug-text">
      <h2>Beschreibung & Nutzung</h2>
      <p>
        Das Dekontaminationsfahrzeug Personen (Dekon-P) ist ein
        hochspezialisiertes Einsatzfahrzeug, das für die Dekontamination von
        Personen nach Gefahrstoffunfällen oder CBRN-Ereignissen (chemisch,
        biologisch, radiologisch, nuklear, explosiv) konzipiert wurde. Die
        umfangreiche Ausstattung ermöglicht den schnellen Aufbau eines
        Dekontaminationsplatzes, um sowohl Einsatzkräfte als auch Zivilpersonen
        effektiv zu dekontaminieren.
      </p>
      <p>
        Zur Beladung gehören Zelte, Duschsysteme, Warmwasserbereiter, Pumpen,
        Auffangwannen, Sichtschutzwände und weiteres Material für die Versorgung
        und Betreuung betroffener Personen. Das Fahrzeug ist so ausgelegt, dass
        es flexibel für verschiedene Einsatzlagen genutzt werden kann und auch
        logistische Aufgaben wie den Materialtransport übernimmt.
      </p>
      <p>
        Im Einsatz arbeitet das Dekon-P eng mit anderen Organisationen wie
        Feuerwehr, Rettungsdienst und Katastrophenschutz zusammen. Die Besatzung
        ist speziell geschult und kann auf unterschiedlichste
        Gefahrensituationen reagieren. Das Fahrzeug ist ein unverzichtbarer
        Bestandteil des Bevölkerungsschutzes und trägt entscheidend zur
        Sicherheit bei Gefahrstofflagen bei.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const allImages = [
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDTH3u9eg9icKvV0eUFrq3Qo4I8JYS2Rfgst5X",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDuF603fEaAGrR3pBLC6uZsgckqOHJlXdjymeD",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDTYQKi0g9icKvV0eUFrq3Qo4I8JYS2Rfgst5X",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDIVB1hMIZUJhENR3wYFouBeC8xXZTVMdtS2Q4",
];
const selectedIndex = ref(0);
function selectImage(i) {
  selectedIndex.value = i;
}
</script>

<style scoped>
.page-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
  margin-top: 82px;
}
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
</style>
