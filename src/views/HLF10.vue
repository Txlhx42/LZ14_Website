<template>
  <div class="fahrzeug-seite">
    <h1 class="page-title">14-HLF-10-01</h1>
    <!-- Bildergalerie -->
    <div class="gallery-wrapper">
      <div class="gallery-vertical">
        <div class="gallery-main">
          <img
            :src="allImages[selectedIndex]"
            class="gallery-main-img"
            alt="HLF Hauptbild"
          />
        </div>
        <div class="gallery-thumbnails">
          <img
            v-for="(img, i) in allImages"
            :key="i"
            :src="img"
            class="gallery-side-img"
            :alt="'HLF Bild ' + (i + 1)"
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
          <td>Hilfeleistungslöschgruppenfahrzeug (HLF) 10</td>
        </tr>
        <tr>
          <th>Fahrgestell</th>
          <td>Mercedes-Benz-Atego 1329 AF</td>
        </tr>
        <tr>
          <th>Aufbau</th>
          <td>Ziegler</td>
        </tr>
        <tr>
          <th>Baujahr</th>
          <td>2015</td>
        </tr>
        <tr>
          <th>Funkrufname</th>
          <td>Florian Gelsenkirchen 14-HLF10-1</td>
        </tr>
        <tr>
          <th>Amt. Kennzeichen</th>
          <td>GE FW 3774</td>
        </tr>
        <tr>
          <th>Besatzung</th>
          <td>max. 9 Einsatzkräfte (Gruppenkabine)</td>
        </tr>
      </tbody>
    </table>
    <!-- Freitextbereich -->
    <div class="fahrzeug-text">
      <h2>Beschreibung & Nutzung</h2>
      <p>
        Das Hilfeleistungslöschgruppenfahrzeug (HLF) 10 ist das zentrale
        Einsatzfahrzeug des Löschzugs und vereint die Möglichkeiten zur
        Brandbekämpfung und technischen Hilfeleistung. Es ist mit einer
        umfangreichen Beladung für Brandeinsätze, Verkehrsunfälle und andere
        Notlagen ausgestattet. Die Gruppenkabine bietet Platz für eine
        vollständige Besatzung von 9 Einsatzkräften.
      </p>
      <p>
        Das HLF wird bei nahezu allen Einsatzarten eingesetzt – vom klassischen
        Löscheinsatz über die Rettung von Personen bis hin zu technischen
        Hilfeleistungen wie Türöffnungen, Unwettereinsätzen oder
        Verkehrsunfällen. Die moderne Ausstattung ermöglicht ein schnelles und
        sicheres Arbeiten auch unter schwierigen Bedingungen.
      </p>
      <p>
        Durch seine Vielseitigkeit und Leistungsfähigkeit ist das HLF ein
        unverzichtbarer Bestandteil des Fuhrparks und bildet das Rückgrat der
        täglichen Einsatzbereitschaft des Löschzugs.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const allImages = [
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDUuXlgnSrbQpsVv49lf5KnmEgShzaYk0uM3ci",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDgCj7fS39DvERhzubdI0f2kTrM5HWwmtaBqKG",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDRhyGwUAmSTPu023FivtHErOnIbXUyAJq9cYR",
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
