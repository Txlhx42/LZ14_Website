# 🚀 LZ14-Website Setup Guide

## Schnellstart für neuen PC/Developer

### ⚡ 1-Minute Setup

```bash
# 1. Repository klonen
git clone https://github.com/Txlhx42/LZ14_Website.git
cd LZ14_Website

# 2. Dependencies installieren
npm install

# 3. Umgebungsvariablen erstellen (siehe unten)

# 4. Starten
npm run dev
```

## 📋 Detaillierte Setup-Anleitung

### **Voraussetzungen:**

- Node.js (Version 16+)
- Git
- Code-Editor (VS Code empfohlen)

### **1. Repository klonen**

```bash
git clone https://github.com/Txlhx42/LZ14_Website.git
cd LZ14_Website
```

### **2. Dependencies installieren**

```bash
npm install
```

### **3. 🔑 Umgebungsvariablen (.env Datei)**

**WICHTIG:** Die `.env` Datei ist aus Sicherheitsgründen NICHT im Repository!

**Windows (PowerShell):**

```powershell
New-Item -ItemType File -Name ".env" -Force
Add-Content -Path ".env" -Value "VITE_SUPABASE_URL=https://rcnpdjcdnnnlohxblokv.supabase.co"
Add-Content -Path ".env" -Value "VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbnBkamNkbm5ubG9oeGJsb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NzE4MDYsImV4cCI6MjA2NjU0NzgwNn0.RgxW95jdxEWM-y-PW6uCZle3fCGtdjC_I2W4UNkxL6E"
```

**macOS/Linux:**

```bash
echo "VITE_SUPABASE_URL=https://rcnpdjcdnnnlohxblokv.supabase.co" > .env
echo "VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbnBkamNkbm5ubG9oeGJsb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NzE4MDYsImV4cCI6MjA2NjU0NzgwNn0.RgxW95jdxEWM-y-PW6uCZle3fCGtdjC_I2W4UNkxL6E" >> .env
```

**Manuell (alle Systeme):**
Erstellen Sie eine Datei namens `.env` im Hauptordner mit folgendem Inhalt:

```
VITE_SUPABASE_URL=https://rcnpdjcdnnnlohxblokv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbnBkamNkbm5ubG9oeGJsb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NzE4MDYsImV4cCI6MjA2NjU0NzgwNn0.RgxW95jdxEWM-y-PW6uCZle3fCGtdjC_I2W4UNkxL6E
```

### **4. Entwicklungsserver starten**

```bash
npm run dev
```

➜ Website läuft auf: http://localhost:5173

## 🧪 Testen der Installation

### **Frontend testen:**

1. Öffne http://localhost:5173
2. Navigation sollte funktionieren
3. Alle Seiten laden korrekt

### **Admin-Bereich testen:**

1. Gehe zu http://localhost:5173/admin-login
2. Login mit: `admin@lz14.de` + Ihr Passwort
3. Blog-Posts laden/erstellen/bearbeiten
4. Logout funktioniert

### **Bei Fehlern:**

```bash
# Cache löschen
rm -rf node_modules package-lock.json
npm install

# .env Datei prüfen
cat .env  # Linux/Mac
type .env # Windows
```

## 🏗️ Verfügbare Befehle

```bash
# Entwicklung
npm run dev          # Development server

# Produktion
npm run build        # Build für Deployment
npm run preview      # Preview des Builds

# Tests & Tools
npm audit            # Security audit
npm run lint         # Code-Stil prüfen (wenn konfiguriert)
```

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

## 🔐 Sicherheitshinweise

### **Wichtig für Entwickler:**

- ✅ `.env` Datei NIEMALS committen
- ✅ API-Keys NIEMALS in Code schreiben
- ✅ Bei Problemen: Keys regenerieren in Supabase
- ✅ Vor Commit: `git status` prüfen

### **Für Team-Members:**

- Neue Entwickler brauchen die `.env` Datei
- API-Keys per sicheren Kanal übertragen (nicht E-Mail/Chat)
- Bei Verdacht auf Kompromittierung: Sofort neue Keys

## 🚀 Deployment

### **Automatisch (Vercel):**

- Jeder `git push` löst automatisches Deployment aus
- Environment Variables sind in Vercel Dashboard gesetzt
- Live-URL: https://lz-14-website.vercel.app

### **Manuell:**

```bash
npm run build
# dist/ Ordner zu Webserver hochladen
```

## 📞 Support

**Bei Problemen:**

1. Prüfe `.env` Datei existiert und korrekt ist
2. `npm install` erneut ausführen
3. Browser-Cache leeren
4. Issues im Repository erstellen

**Häufige Fehler:**

- `Supabase Umgebungsvariablen fehlen!` → `.env` Datei fehlt
- `Network Error` → Internet/VPN-Verbindung prüfen
- `Login failed` → Admin-Zugangsdaten prüfen

---

_Erstellt: $(date)_
_Version: Production-Ready 🛡️_
