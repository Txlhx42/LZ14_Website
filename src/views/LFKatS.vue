<template>
  <div class="fahrzeug-seite">
    <h1 class="page-title">14-LF20KatS-01</h1>
    <!-- Bildergalerie -->
    <div class="gallery-wrapper">
      <div class="gallery-vertical">
        <div class="gallery-main">
          <img
            :src="allImages[selectedIndex]"
            class="gallery-main-img"
            alt="LF KatS Hauptbild"
          />
        </div>
        <div class="gallery-thumbnails">
          <img
            v-for="(img, i) in allImages"
            :key="i"
            :src="img"
            class="gallery-side-img"
            :alt="'LF KatS Bild ' + (i + 1)"
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
          <td>Löschgruppenfahrzeug (LF) 20-KatS</td>
        </tr>
        <tr>
          <th>Fahrgestell</th>
          <td>Mercedes-Benz Atego 1323 AF</td>
        </tr>
        <tr>
          <th>Aufbau</th>
          <td>Fa. Ziegler</td>
        </tr>
        <tr>
          <th>Baujahr</th>
          <td>2017</td>
        </tr>
        <tr>
          <th>Funkrufname</th>
          <td>Florian Gelsenkirchen 14-LFKATS-1</td>
        </tr>
        <tr>
          <th>Amtl. Kennzeichen</th>
          <td>GE FW 3784</td>
        </tr>
        <tr>
          <th>Besatzung</th>
          <td>max. 9 FM (SB) (Gruppenkabine)</td>
        </tr>
      </tbody>
    </table>
    <!-- Freitextbereich -->
    <div class="fahrzeug-text">
      <h2>Beschreibung & Nutzung</h2>
      <p>
        Das Löschgruppenfahrzeug LF 20-Katastrophenschutz, intern auch als
        "14-2" bezeichnet, ist ein kommunal durch die Stadt Gelsenkirchen
        angeschaffter Ersatz für ein abgängiges Katastrophenschutz-Fahrzeug aus
        Bundesbeständen. Die Beschaffung lehnte sich dabei an eine Ausschreibung
        des Bundes an, jedoch mit einigen Ergänzungen.
      </p>
      <p>
        Haupteinsatzzweck des Fahrzeugs sind Brandeinsätze. Dazu verfügt es über
        einen Wassertank mit einem Löschwasservolumen von 1000 Litern, über eine
        Feuerlöschkreiselpumpe mit einer Förderleistung von 2000 Litern pro
        Minute (FPN 10-2000) sowie über eine Tragkraftspritze mit einer
        Förderleistung von 1500 Litern pro Minute (PFPN 10-1500). Ebenso
        befindet sich umfangreiches Schlauchmaterial an Bord des Fahrzeugs. Ein
        Großteil der B-Schläuche kann aus Schlauchfächern am Heck während der
        Fahrt verlegt werden. Zur weiteren Ausstattung zählen
        Schlauchtragekörbe, ein mobiler Rauchabschluss sowie ein Schlauchpaket
        mit C-Hohlstrahlrohr für den Innenangriff. Weitere Hohlstrahlrohre, eine
        umfangreiche Armaturenausstattung sowie vier Pressluftatmer – davon zwei
        im Mannschaftsraum untergebracht – gehören ebenfalls zur Beladung.
      </p>
      <p>
        Weiter können mit dem Fahrzeug auch kleinere technische Hilfeleistungen
        abgearbeitet werden. Hier zeigt sich besonders die erweiterte Beladung
        gegenüber der Ausstattung des Bundes. So gehören unter anderem ein
        Stromerzeuger (9 kVA), LED-Beleuchtungsgeräte, ein
        Elektro-Trennschleifer, eine Tauchpumpe sowie eine Motorkettensäge zur
        Ausstattung. Diverse Werkzeuge, Absperrmaterial, Ausstattung zur ersten
        Hilfe sowie eine vierteilige Steckleiter mit Bockleiteraufsatz
        komplettieren die Beladung.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const allImages = [
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDCbPiPbwO6QLD8xAudoKit9Mn3v7hXlPZIWeB",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLDsbYYIsn7mTSg9VPaN8JqwKYbMG1ptLc4BIn0",
  "https://ijzekbx4lj.ufs.sh/f/CY86pFwO6QLD8dCYZjRQglc7WZ35eKt6zmpOdYakU4xn029f",
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
