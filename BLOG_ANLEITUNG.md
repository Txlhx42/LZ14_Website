# Blog-System Anleitung (aktualisiert)

## Übersicht

Das Blog-System "Aktuelles" besteht aus folgenden Komponenten:

1. **Öffentliche Seite**: `/aktuelles` – Zeigt alle Blog-Beiträge an
2. **Einzelne Beiträge**: `/aktuelles/[id]` – Zeigt einen spezifischen Beitrag an
3. **Admin-Dashboard**: `/admin` – Zum Erstellen und Verwalten von Beiträgen
4. **Admin-Login**: `/admin-login` – Zugang zum Admin-Bereich

## Admin-Zugang

### Login

- **URL**: `/admin-login`
- **Passwort**: `admin123`
- **Hinweis**: Das Passwort ist im Code hardcodiert und sollte für eine Produktionsumgebung sicherer implementiert werden.

### Admin-Dashboard

Nach erfolgreicher Anmeldung gelangst du zum Admin-Dashboard unter `/admin`.

## Blog-Beiträge erstellen

### 1. Neuen Beitrag erstellen

1. Klicke auf "Neuen Beitrag erstellen" im Admin-Dashboard
2. Fülle alle Pflichtfelder aus:
   - **Titel**: Der Titel des Beitrags
   - **Kurzbeschreibung**: Kurze Zusammenfassung (wird in der Übersicht angezeigt)
   - **Inhalt**: Der vollständige Inhalt des Beitrags

### 2. Optionale Felder

- **Autor**: Name des Autors (optional)
- **Bild-URL**: URL zu einem Bild (optional)

### 3. HTML-Unterstützung & Editor-Tipps

- Du kannst HTML-Tags verwenden oder die Toolbar-Buttons nutzen.
- **Absatz-Button** fügt ein leeres `<p></p>` ein (kein Platzhaltertext).
- **Überschriften-Buttons** fügen leere `<h1></h1>`, `<h2></h2>` usw. ein.
- **Listenpunkt-Button** fügt `<li></li>` ein.
- **Zitat-Button** fügt `<blockquote></blockquote>` ein.
- **Fett/Kursiv/Link**: Wenn Text markiert ist, wird er eingerahmt, sonst leeres Tag.
- **Bild-Button** fügt `<img src="" alt="Bildbeschreibung" />` ein. Füge die Bild-URL direkt in das `src=""` ein (nur die URL, kein ganzer Tag!).
- **Link-Button** fügt `<a href="">Linktext</a>` ein. Füge die URL in das `href=""` ein.
- **Tipp:** Beim Einfügen in Attribute (z.B. `src=""` oder `href=""`) wird automatisch nur der Wert zwischen den Anführungszeichen ersetzt – keine doppelten Attribute mehr!

### 4. Nach dem Speichern

- Nach dem Erstellen oder Bearbeiten eines Beitrags wird automatisch nach oben gescrollt, damit du sofort die Übersicht siehst.

## Blog-Beiträge verwalten

### Bearbeiten

1. Klicke auf einen vorhandenen Beitrag in der Seitenleiste
2. Klicke auf "Bearbeiten"
3. Ändere die gewünschten Felder
4. Klicke auf "Änderungen speichern"

### Löschen

1. Klicke auf "Löschen" bei dem gewünschten Beitrag
2. Es erscheint ein eigener Bestätigungs-Dialog (kein Browser-Alert)
3. Erst nach Bestätigung wird der Beitrag gelöscht

## Datenverwaltung

### Speicherung

- Alle Blog-Beiträge werden im `localStorage` des Browsers gespeichert
- Das bedeutet, die Daten sind nur lokal verfügbar
- Für eine Produktionsumgebung sollte eine echte Datenbank verwendet werden

### Backup

Um die Blog-Daten zu sichern:

1. Öffne die Browser-Entwicklertools (F12)
2. Gehe zu "Application" → "Local Storage"
3. Kopiere den Inhalt von `blogPosts`

### Wiederherstellung

Um Blog-Daten wiederherzustellen:

1. Füge den gesicherten JSON-Code in das `blogPosts` Feld im localStorage ein

## Sicherheitshinweise

### Aktuelle Implementierung

- Das Admin-Passwort ist im Code hardcodiert
- Keine echte Authentifizierung
- Daten werden nur lokal gespeichert

### Empfehlungen für Produktion

- Implementiere eine sichere Authentifizierung
- Verwende eine echte Datenbank
- Füge CSRF-Schutz hinzu
- Implementiere Rate-Limiting
- Verwende HTTPS

## Technische Details

### Komponenten

- `Aktuelles.vue` – Übersichtsseite aller Beiträge
- `BlogPost.vue` – Einzelne Beitragsansicht
- `AdminDashboard.vue` – Admin-Interface
- `AdminLogin.vue` – Login-Seite

### Router-Konfiguration

- Alle Routen sind in `src/router/index.js` definiert
- Admin-Dashboard hat einen Router-Guard für Authentifizierung

### Styling

- Responsive Design für Desktop und Mobile
- Konsistent mit dem Rest der Website
- Verwendet die gleiche Farbpalette (#cc0000 als Hauptfarbe)

## Troubleshooting

### Häufige Probleme

**Beitrag wird nicht angezeigt:**

- Prüfe, ob alle Pflichtfelder ausgefüllt sind
- Stelle sicher, dass der Inhalt gültiges HTML ist

**Admin-Login funktioniert nicht:**

- Stelle sicher, dass das Passwort `admin123` ist
- Prüfe, ob JavaScript aktiviert ist

**Beiträge verschwinden:**

- localStorage kann gelöscht werden (Browser-Cache löschen)
- Erstelle regelmäßige Backups der Daten

**Probleme beim Einfügen von Bild- oder Link-URLs:**

- Füge die URL immer direkt in das Attribut (z.B. `src=""`) ein, nicht den ganzen Tag
- Beim Einfügen eines kompletten Tags wird automatisch nur die URL übernommen
- Es entstehen keine doppelten Attribute mehr

### Support

Bei technischen Problemen wende dich an den Entwickler oder erstelle ein Issue im Projekt-Repository.
