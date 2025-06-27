# 🔥 LZ14-Website - Freiwillige Feuerwehr Gelsenkirchen-Horst

Eine moderne Vue.js Website für den Löschzug 14 der Freiwilligen Feuerwehr Gelsenkirchen-Horst mit Admin-Dashboard und automatischer Session-Verwaltung.

## 🚀 Features

- ✅ **Responsive Design** für Desktop & Mobile
- ✅ **Blog-System "Aktuelles"** mit Admin-Dashboard
- ✅ **Sichere Authentifizierung** mit Supabase
- ✅ **Automatische Session-Timeouts** (Sicherheit)
- ✅ **Moderne Browser-Unterstützung**
- ✅ **Production-Ready** mit Vercel Deployment

---

## 📋 Schnellstart

### Voraussetzungen

- Node.js (Version 16+)
- Git
- Code-Editor (VS Code empfohlen)

### Installation

```bash
# 1. Repository klonen
git clone https://github.com/Txlhx42/LZ14_Website.git
cd LZ14_Website

# 2. Dependencies installieren
npm install

# 3. Umgebungsvariablen erstellen (siehe unten)

# 4. Entwicklungsserver starten
npm run dev
```

### 🔑 Umgebungsvariablen (.env)

**WICHTIG:** Erstellen Sie eine `.env` Datei im Hauptordner:

```env
VITE_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR-ANON-PUBLIC-KEY
```

⚠️ **Sicherheit:** Die `.env` Datei wird **NIEMALS** in Git committed!

---

## 🏗️ Verfügbare Befehle

```bash
# Entwicklung
npm run dev          # Development server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview des Builds

# Tools
npm audit            # Security audit
```

---

## 📁 Projekt-Struktur

```
LZ14-Website/
├── .env                 # ⚠️ LOKAL - nicht in Git!
├── src/
│   ├── views/          # Seiten (Home, About, Admin...)
│   ├── components/     # Wiederverwendbare Komponenten
│   ├── utils/          # Supabase & Security
│   └── router/         # Vue Router Konfiguration
├── public/             # Statische Dateien
└── vercel.json         # Deployment-Konfiguration
```

---

## 🔐 Admin-Bereich

### Zugang

- **URL:** `/admin-login`
- **Login:** `admin@lz14.de` + Ihr Passwort
- **Dashboard:** `/admin` (nach Login)

### Session-Management

- ✅ **Automatischer Logout** nach Inaktivität
- ✅ **Session-Warnings** vor Ablauf
- ✅ **Sichere Token-Verwaltung**

---

## 📝 Blog-System "Aktuelles"

### Öffentliche Seiten

- **Übersicht:** `/aktuelles` - Alle Blog-Beiträge
- **Einzelner Beitrag:** `/aktuelles/[id]` - Spezifischer Beitrag

### Admin-Funktionen

1. **Neuen Beitrag erstellen**

   - Titel, Kurzbeschreibung, Inhalt (Pflichtfelder)
   - Autor, Bild-URL (optional)

2. **HTML-Editor mit Toolbar**

   - Überschriften (H1-H6)
   - Listen, Zitate, Links
   - Fett, Kursiv, Bilder
   - Live-Vorschau

3. **Beiträge verwalten**
   - Bearbeiten bestehender Beiträge
   - Löschen mit Bestätigung
   - Automatisches Speichern

### Daten-Verwaltung

- **Backend:** Supabase (PostgreSQL)
- **Backup:** Über Supabase Dashboard
- **Sicherheit:** Row Level Security (RLS)

---

## 🛡️ Sicherheitsfeatures

### Implementierte Maßnahmen

- ✅ **API-Key Sicherheit** (Umgebungsvariablen)
- ✅ **Input-Validierung** (E-Mail, Content, URLs)
- ✅ **XSS-Schutz** (HTML Sanitization)
- ✅ **Rate Limiting** (Login-Versuche, API-Calls)
- ✅ **Session-Sicherheit** (PKCE Flow, Token-Rotation)
- ✅ **HTTP-Security Headers** (CSP, HSTS, etc.)
- ✅ **Error Handling** (Keine sensiblen Daten in Fehlern)

### Supabase Security

- ✅ **Row Level Security (RLS)** aktiviert
- ✅ **Authentifizierte API-Zugriffe**
- ✅ **Automatische Backups**

### Security Headers

```javascript
// vercel.json
Content-Security-Policy
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security
Permissions-Policy
Referrer-Policy
```

---

## 🌐 Browser-Support

### Unterstützte Browser

- **Chrome:** 80+ (März 2020)
- **Firefox:** 78+ (Juni 2020)
- **Safari:** 14+ (September 2020)
- **Edge:** 88+ (März 2021)
- **iOS Safari:** 13+
- **Android Chrome:** 80+

### Nicht unterstützt

- Internet Explorer (alle Versionen)
- Browser älter als 3 Jahre

### Kompatibilitätsverbesserungen

- **CSS-Fallbacks** für ältere Browser
- **Autoprefixer** für Vendor-Prefixes
- **Graceful Degradation** bei fehlenden Features
- **Barrierefreiheit** (WCAG-konform)

---

## 🗄️ Supabase Backend Setup

### 1. Supabase Projekt erstellen

1. Gehen Sie zu [supabase.com](https://supabase.com)
2. Erstellen Sie neues Projekt: `lz14-website`
3. Region: Frankfurt (eu-central-1)

### 2. Datenbank-Tabellen

```sql
-- Blog Posts Tabelle
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  author TEXT,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Blog posts are editable by authenticated users" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
```

### 3. Admin-User erstellen

- **Authentication** → **Users** → **Add user**
- **Email:** `admin@lz14.de`
- **Password:** Ihr sicheres Passwort

### 4. API-Keys konfigurieren

1. **Settings** → **API**
2. Kopieren Sie URL und anon public Key
3. Tragen Sie in `.env` Datei ein

---

## 🚀 Deployment

### Automatisch (Vercel)

- Jeder `git push` → Automatisches Deployment
- Environment Variables im Vercel Dashboard
- Live-URL: Ihre Vercel-URL

### Vercel Environment Variables

```
VITE_SUPABASE_URL = https://YOUR-PROJECT-ID.supabase.co
VITE_SUPABASE_ANON_KEY = YOUR-ANON-PUBLIC-KEY
```

### Manuell

```bash
npm run build
# dist/ Ordner zu Webserver hochladen
```

---

## ⚠️ Wichtige Sicherheitshinweise

### Für Entwickler

- ✅ **NIEMALS** `.env` Datei committen
- ✅ **NIEMALS** API-Keys in Code schreiben
- ✅ Vor Commit: `git status` prüfen
- ✅ Bei Problemen: Keys in Supabase regenerieren

### Für Team-Members

- Neue Entwickler brauchen eigene `.env` Datei
- API-Keys per sicheren Kanal übertragen
- Bei Verdacht auf Kompromittierung: Sofort neue Keys

### Security Checklist vor Go-Live

- [ ] API-Keys in Vercel Environment Variables
- [ ] `.env` File NICHT in Git
- [ ] Supabase RLS Policies aktiv
- [ ] HTTPS erzwungen
- [ ] Dependencies aktuell (`npm audit`)
- [ ] Admin-Passwort stark und sicher

---

## 🔧 Troubleshooting

### Häufige Probleme

**Supabase Fehler:**

```
"Supabase Umgebungsvariablen fehlen!"
→ .env Datei erstellen/prüfen
```

**Login funktioniert nicht:**

```
→ Admin-Passwort prüfen
→ Supabase User existiert?
→ RLS Policies korrekt?
```

**Build-Fehler:**

```bash
# Cache löschen
rm -rf node_modules package-lock.json
npm install
```

**Browser-Kompatibilität:**

```
→ Browser-Version prüfen
→ JavaScript aktiviert?
→ HTTPS verwenden
```

### Development Setup Probleme

```bash
# .env Datei prüfen
cat .env          # Linux/Mac
type .env         # Windows

# Dependencies neu installieren
npm install

# Development server
npm run dev
```

---

## 📊 Performance & Monitoring

### Supabase Dashboard

- **Database:** Speicherverbrauch
- **Auth:** Login-Statistiken
- **API:** Request-Zahlen
- **Logs:** Fehler und Performance

### Kostenstruktur (Supabase)

**Kostenlos:**

- 50MB Datenbank
- 100MB Dateispeicher
- 2GB Bandbreite/Monat
- 50.000 MAU (Monthly Active Users)

**Für LZ14:** Völlig ausreichend! 🎉

---

## 🌐 Browser-Support

### Unterstützte Browser

Das Projekt unterstützt moderne Browser basierend auf folgender Konfiguration:

**Mainstream-Browser:**

- Browser mit > 1% Marktanteil
- Letzten 2 Versionen aller Browser
- Aktive Browser (nicht "tot")

**Mindestversionen:**

- **Chrome:** ≥ 80
- **Firefox:** ≥ 78
- **Safari:** ≥ 14
- **Edge:** ≥ 88

**Mobile Browser:**

- **iOS:** ≥ 13
- **Android:** ≥ 8

**Nicht unterstützt:**

- Internet Explorer 11 und älter

> 💡 **Hinweis:** Diese Konfiguration wird in `.browserslistrc` definiert und von Build-Tools wie Vite und Autoprefixer verwendet.

---

## 🤝 Development Guidelines

### Code-Standards

- Vue 3 Composition API
- ES6+ JavaScript
- Responsive CSS (Mobile-First)
- Semantic HTML
- WCAG Barrierefreiheit

### Git-Workflow

```bash
# Feature-Branch erstellen
git checkout -b feature/new-feature

# Änderungen committen
git add .
git commit -m "feat: neue Funktion hinzugefügt"

# Pull Request erstellen
git push origin feature/new-feature
```

### Datei-Organisation

```
src/
├── views/           # Seiten-Komponenten
├── components/      # Wiederverwendbare Komponenten
├── utils/           # Helper-Funktionen
├── assets/          # Statische Assets
└── router/          # Vue Router Konfiguration
```

---

## 📞 Support & Kontakt

### Bei Problemen

1. `.env` Datei existiert und korrekt?
2. `npm install` erneut ausführen
3. Browser-Cache leeren
4. Issue im Repository erstellen

### Team-Kommunikation

- GitHub Issues für Bug-Reports
- GitHub Discussions für Features
- Code-Reviews über Pull Requests

---

## 📄 Lizenz & Credits

**Entwickelt von:** @Muhammed Cavdarci ©2025  
**Für:** Löschzug 14, Freiwillige Feuerwehr Gelsenkirchen-Horst

### Technologie-Stack

- **Frontend:** Vue.js 3, Vite
- **Backend:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Styling:** CSS3, Responsive Design
- **Security:** DOMPurify, Rate Limiting

---

## 🔄 Updates & Wartung

### Regelmäßige Wartung

- Dependencies aktualisieren (`npm audit`)
- Browser-Kompatibilität prüfen
- Supabase-Logs überwachen
- Backup-Strategie überprüfen

### Feature-Roadmap

- [ ] Push-Notifications für neue Blog-Posts
- [ ] Erweiterte Admin-Rollen
- [ ] Image-Upload-Funktionalität
- [ ] SEO-Optimierungen
- [ ] Progressive Web App (PWA)

---

**🚀 Bereit für Produktion!**  
_Letzte Aktualisierung: Januar 2025_  
_Version: Production-Ready 🛡️_
