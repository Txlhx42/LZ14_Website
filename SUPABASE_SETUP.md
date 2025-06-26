# Supabase Backend Setup - LZ14 Website

## 🎯 Was Sie bekommen:

- ✅ **Echtes Backend** statt localStorage
- ✅ **Sichere Authentifizierung** für Admin-Login
- ✅ **Zentrale Datenspeicherung** - alle sehen dieselben Inhalte
- ✅ **Kostenlos** bis 50MB Datenbank

## 📝 Schritt-für-Schritt Setup:

### 1. Supabase Account erstellen

1. Gehen Sie zu [supabase.com](https://supabase.com)
2. Klicken Sie auf "Start your project"
3. Melden Sie sich mit GitHub/Google an
4. Erstellen Sie ein neues Projekt:
   - **Name:** `lz14-website`
   - **Database Password:** Merken Sie sich das Passwort!
   - **Region:** Frankfurt (eu-central-1)

### 2. Datenbank-Tabellen erstellen

Öffnen Sie in Ihrem Supabase Dashboard den **SQL Editor** und führen Sie folgende Befehle aus:

```sql
-- Blog Posts Tabelle erstellen
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

-- Row Level Security aktivieren
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy für öffentliches Lesen
CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
  FOR SELECT USING (true);

-- Policy für Admin-Schreibzugriff
CREATE POLICY "Blog posts are editable by authenticated users" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Trigger für updated_at
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();
```

### 3. Admin-User erstellen

Im Supabase Dashboard:

1. Gehen Sie zu **Authentication** → **Users**
2. Klicken Sie auf **"Add user"**
3. Tragen Sie ein:
   - **Email:** `admin@lz14.de` (oder Ihre gewünschte E-Mail)
   - **Password:** Ihr sicheres Admin-Passwort
   - **Email Confirm:** ✅ (aktiviert)

### 4. API-Keys kopieren

1. Gehen Sie zu **Settings** → **API**
2. Kopieren Sie:
   - **Project URL** (z.B. `https://abcdefgh.supabase.co`)
   - **anon public** Key

### 5. Umgebungsvariablen konfigurieren

Bearbeiten Sie die Datei `src/utils/supabase.js`:

```javascript
// Ersetzen Sie diese Werte mit Ihren echten Supabase-Daten:
const supabaseUrl = "https://IHR-PROJECT-ID.supabase.co";
const supabaseKey = "IHR-ANON-PUBLIC-KEY";
```

**Wichtig:** Für Vercel Deployment erstellen Sie eine `.env` Datei:

```env
VITE_SUPABASE_URL=https://IHR-PROJECT-ID.supabase.co
VITE_SUPABASE_ANON_KEY=IHR-ANON-PUBLIC-KEY
```

Und aktualisieren Sie `supabase.js`:

```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

### 6. Erste Tests

1. **Lokaler Test:**

   ```bash
   npm run dev
   ```

2. **Admin-Login testen:**

   - Gehen Sie zu `/admin-login`
   - Verwenden Sie die E-Mail und das Passwort aus Schritt 3

3. **Blog-Post erstellen:**
   - Nach erfolgreichem Login erstellen Sie einen Test-Beitrag
   - Prüfen Sie in Supabase Dashboard ob der Beitrag gespeichert wurde

### 7. Vercel Deployment

1. **Umgebungsvariablen in Vercel setzen:**

   - Gehen Sie zu Vercel Dashboard
   - Ihr Projekt → Settings → Environment Variables
   - Fügen Sie hinzu:
     - `VITE_SUPABASE_URL`: Ihre Supabase URL
     - `VITE_SUPABASE_ANON_KEY`: Ihr Public Key

2. **Redeploy:**
   ```bash
   git add .
   git commit -m "Supabase Backend integriert"
   git push origin main
   ```

## 🚀 Was jetzt funktioniert:

### ✅ Für Admins:

- Sichere Anmeldung mit E-Mail + Passwort
- Blog-Posts erstellen/bearbeiten/löschen
- Daten werden zentral gespeichert

### ✅ Für Besucher:

- Alle sehen dieselben aktuellen Blog-Posts
- Keine lokalen Daten mehr
- Schnellere Ladezeiten

### ✅ Für Sie:

- Professionelles Backend
- Automatische Backups
- Skalierbar bis 500GB (kostenpflichtig)

## 🔧 Migration bestehender Daten

Falls Sie bereits Blog-Posts im localStorage haben:

1. Öffnen Sie das Admin-Dashboard (alte Version)
2. Kopieren Sie die Posts aus dem Browser-Speicher
3. Erstellen Sie sie manuell im neuen Admin-Dashboard

Oder nutzen Sie diesen Migration-Script:

```javascript
// Führen Sie das in der Browser-Konsole aus
const oldPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
console.log("Alte Posts:", oldPosts);
// Dann können Sie diese manuell ins neue System übertragen
```

## 🛡️ Sicherheit

- ✅ **Row Level Security** aktiviert
- ✅ **Echte Authentifizierung**
- ✅ **HTTPS überall**
- ✅ **Automatische Backups**

## 📊 Monitoring

Im Supabase Dashboard können Sie überwachen:

- **Database:** Speicherverbrauch
- **Auth:** Login-Statistiken
- **API:** Request-Zahlen
- **Logs:** Fehler und Performance

## 💰 Kosten

**Kostenlos:**

- 50MB Datenbank
- 100MB Dateispeicher
- 2 GB Bandbreite/Monat
- 50.000 MAU (Monthly Active Users)

**Für LZ14-Website:** Völlig ausreichend! 🎉

---

**Nach dem Setup haben Sie ein professionelles Backend für Ihre Feuerwehr-Website!** 🚀
