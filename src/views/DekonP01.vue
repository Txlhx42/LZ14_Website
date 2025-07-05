<template>
  <div class="fahrzeug-seite">
    <h1 class="page-title">14-DEKON-P-01</h1>
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
          <td>Lastkraftwagen Dekon-P/G</td>
        </tr>
        <tr>
          <th>Fahrgestell</th>
          <td>MAN TGM 18.280 4x4</td>
        </tr>
        <tr>
          <th>Aufbau</th>
          <td>EMPL</td>
        </tr>
        <tr>
          <th>Baujahr</th>
          <td>2008</td>
        </tr>
        <tr>
          <th>Funkrufname</th>
          <td>Florian Gelsenkirchen 14 DekonP 01</td>
        </tr>
        <tr>
          <th>Amtl. Kennzeichen</th>
          <td>NRW8-5248</td>
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
        Das Dekontaminationsfahrzeug Personen (Dekon-P) ist ein Spezialfahrzeug,
        das für die Dekontamination von Personen nach Gefahrstoffunfällen oder
        CBRN-Ereignissen (chemisch, biologisch, radiologisch, nuklear, explosiv)
        eingesetzt wird. Es ist mit einer umfangreichen Ausstattung zur
        Einrichtung und zum Betrieb von Dekontaminationsplätzen ausgerüstet.
        Dazu gehören Zelte, Duschsysteme, Warmwasserbereiter, Pumpen,
        Auffangwannen, Sichtschutzwände und umfangreiches Material zur
        Versorgung und Betreuung betroffener Personen.
      </p>
      <p>
        Das Fahrzeug ermöglicht es, innerhalb kürzester Zeit einen Dekon-Platz
        für eine größere Anzahl von Personen aufzubauen. Die Ausstattung ist so
        konzipiert, dass sowohl Einsatzkräfte als auch Zivilpersonen sicher und
        effizient dekontaminiert werden können. Neben der eigentlichen
        Dekontamination ist das Fahrzeug auch für logistische Aufgaben, wie den
        Transport von Material und Personal, geeignet.
      </p>
      <p>
        Im Einsatzfall arbeitet das Dekon-P eng mit anderen Einheiten wie dem
        Rettungsdienst, der Feuerwehr und dem Katastrophenschutz zusammen. Die
        Besatzung ist speziell geschult und kann flexibel auf unterschiedliche
        Einsatzlagen reagieren. Das Fahrzeug ist ein wichtiger Bestandteil des
        Bevölkerungsschutzes und trägt maßgeblich zur Sicherheit bei
        Gefahrstofflagen bei.
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
