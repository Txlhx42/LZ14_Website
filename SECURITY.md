# 🛡️ Security Guide - LZ14 Website

## Implementierte Sicherheitsmaßnahmen

### ✅ **1. API-Key Sicherheit**

- ✅ API-Keys in Umgebungsvariablen (.env)
- ✅ .env zu .gitignore hinzugefügt
- ✅ Keine Hardcoded API-Keys im Code
- ✅ Validierung der Umgebungsvariablen

### ✅ **2. Input-Validierung**

- ✅ E-Mail-Validierung
- ✅ Blog-Post Titel/Content Validierung
- ✅ Bild-URL Validierung
- ✅ Autor-Name Validierung
- ✅ Längen-Limits für alle Eingaben

### ✅ **3. XSS-Schutz**

- ✅ HTML-Content Sanitization
- ✅ Gefährliche Attribute entfernt
- ✅ Script-Tags blockiert
- ✅ JavaScript-URLs blockiert

### ✅ **4. Rate Limiting**

- ✅ Login-Versuche: Max 3 pro Minute
- ✅ Blog-Post Creation: Max 3 pro Minute
- ✅ Blog-Post Updates: Max 5 pro Minute
- ✅ Client-seitige Rate-Limits

### ✅ **5. Session-Sicherheit**

- ✅ PKCE Flow für OAuth
- ✅ Kein Session-Hijacking über URLs
- ✅ Automatische Token-Erneuerung
- ✅ Session-Validierung (24h Limit)

### ✅ **6. HTTP-Security Headers**

- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Strict-Transport-Security (HSTS)
- ✅ Permissions-Policy
- ✅ Referrer-Policy

### ✅ **7. Error Handling**

- ✅ Keine sensitiven Daten in Fehlermeldungen
- ✅ Sichere Fehlerbehandlung
- ✅ Produktion vs. Development Modus

### ✅ **8. Database Security (Supabase)**

- ✅ Row Level Security (RLS) aktiviert
- ✅ Authentifizierte Benutzer für Blog-Posts
- ✅ API-Keys rotierbar

## 🔐 **Deployment-Sicherheit**

### **Vercel Umgebungsvariablen:**

1. Gehen Sie zu Vercel Dashboard → Ihr Projekt → Settings → Environment Variables
2. Fügen Sie hinzu:
   ```
   VITE_SUPABASE_URL = https://rcnpdjcdnnnlohxblokv.supabase.co
   VITE_SUPABASE_ANON_KEY = ihr_anon_key_hier
   ```

### **Git-Sicherheit:**

```bash
# Prüfen Sie vor jedem Commit:
git status

# Stellen Sie sicher, dass .env NICHT committed wird:
# .env sollte in .gitignore stehen (✅ bereits implementiert)
```

## 🔒 **Supabase RLS Policies**

```sql
-- Blog Posts Policy (bereits implementiert)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
FOR ALL USING (auth.uid() IS NOT NULL);

-- Zusätzliche Security: IP-Whitelist (optional)
-- Nur wenn Sie eine feste IP haben:
-- CREATE POLICY "IP whitelist" ON blog_posts
-- FOR ALL USING (
--   current_setting('request.headers')::json->>'x-forwarded-for' = 'IHRE_IP'
-- );
```

## 🚨 **Security Checklist vor Go-Live**

- [ ] API-Keys in Vercel Environment Variables gesetzt
- [ ] .env File NICHT in Git committed
- [ ] Supabase RLS Policies aktiv
- [ ] HTTPS erzwungen (automatisch bei Vercel)
- [ ] Alle Dependencies aktuell (npm audit)
- [ ] CSP Headers funktionieren
- [ ] Admin-Passwort stark und sicher

## ⚠️ **Security Best Practices**

### **Admin-Zugang:**

- Verwenden Sie starke, einzigartige Passwörter
- Aktivieren Sie 2FA in Supabase (empfohlen)
- Loggen Sie sich regelmäßig aus

### **Content-Management:**

- Vertrauen Sie nur bekannten Bild-URLs
- Prüfen Sie Blog-Content vor Veröffentlichung
- Verwenden Sie HTTPS für alle externen Links

### **Monitoring:**

- Überwachen Sie Login-Versuche
- Prüfen Sie Supabase-Logs regelmäßig
- Beobachten Sie ungewöhnliche Aktivitäten

## 🔧 **Bei Problemen:**

1. **API-Key kompromittiert:**

   - Generieren Sie neuen Key in Supabase
   - Update in Vercel Environment Variables
   - Redeploy der Anwendung

2. **Verdächtige Aktivitäten:**

   - Prüfen Sie Supabase-Auth Logs
   - Ändern Sie Admin-Passwort
   - Prüfen Sie Blog-Posts auf Änderungen

3. **Performance-Probleme:**
   - Rate-Limits sind aktiv (normal)
   - Warten Sie bei "Zu viele Versuche"
   - Bei dauerhaften Problemen: Limits anpassen

## 📧 **Sicherheitsrichtlinien:**

- **NIEMALS** API-Keys in Code oder Screenshots teilen
- **IMMER** .env aus Git-Commits ausschließen
- **REGELMÄSSIG** Dependencies aktualisieren
- **SOFORT** bei Sicherheitsproblemen reagieren

---

_Letzte Aktualisierung: $(date)_
_Sicherheitslevel: **PRODUCTION-READY** 🛡️_
