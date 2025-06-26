# Browser Support - LZ14 Website

## Unterstützte Browser

Das LZ14-Website Projekt unterstützt moderne Browser mit den folgenden Mindestversionen:

### Desktop Browser

- **Chrome:** 80+ (März 2020)
- **Firefox:** 78+ (Juni 2020)
- **Safari:** 14+ (September 2020)
- **Edge:** 88+ (März 2021)

### Mobile Browser

- **iOS Safari:** 13+
- **Android Chrome:** 80+
- **Samsung Internet:** 13+

## Nicht unterstützte Browser

- Internet Explorer (alle Versionen)
- Browser älter als 3 Jahre

## Implementierte Kompatibilitätsverbesserungen

### 1. CSS-Fallbacks

- **`:focus-within`** → Fallback mit `:focus` für ältere Browser
- **`@media (prefers-reduced-motion)`** → `@supports`-Queries für bessere Kompatibilität
- **`@media (forced-colors)`** → Hoher Kontrast Modus für Barrierefreiheit

### 2. Build-Konfiguration

- Autoprefixer für automatische Vendor-Prefixes
- Optimierte Build-Targets für bessere Kompatibilität
- CSS-Target-Spezifikation für moderne Features

### 3. Browserslist-Konfiguration

```
> 1%
last 2 versions
not dead
not ie 11
Chrome >= 80
Firefox >= 78
Safari >= 14
Edge >= 88
iOS >= 13
Android >= 8
```

## Verbesserte Dateien

Die folgenden Dateien wurden für bessere Browser-Kompatibilität optimiert:

### Views

- `AboutUs.vue` ✅
- `YouthFireDepartment.vue` ✅
- `DeconUnit.vue` ✅
- `Contact.vue` ✅
- `Legal.vue` ✅
- `ElderDepartment.vue` ✅

### Components

- `Navbar.vue` ✅

### Konfiguration

- `package.json` ✅ (Browserslist)
- `vite.config.js` ✅ (Build-Targets)
- `.browserslistrc` ✅ (Detaillierte Browser-Targets)

## Features mit Fallbacks

### CSS Features

1. **Transform & Transitions**

   - Automatische Vendor-Prefixes durch Autoprefixer
   - Graceful Degradation für ältere Browser

2. **Fokus-Management**

   - `:focus-within` mit `:focus` Fallback
   - Verbesserte Tastaturnavigation

3. **Animationen**

   - `prefers-reduced-motion` Unterstützung
   - Automatische Deaktivierung für Nutzer mit Bewegungseinschränkungen

4. **Barrierefreiheit**
   - `forced-colors` Media Query
   - Hoher Kontrast Modus Unterstützung

## Testen der Browser-Kompatibilität

### Build-Test

```bash
npm run build
```

### Entwicklung

```bash
npm run dev
```

### Browser-Testing

Empfohlene Test-Browser:

- Chrome (aktuell)
- Firefox (aktuell)
- Safari (wenn verfügbar)
- Edge (aktuell)

## Monitoring

Die Browser-Kompatibilität sollte regelmäßig überprüft werden:

1. Bei neuen CSS-Features → [caniuse.com](https://caniuse.com) prüfen
2. Bei JavaScript-Features → Transpilation über Vite
3. Bei neuen Dependencies → Browser-Support prüfen

## Aktualisierungen

Die Browserslist-Konfiguration sollte alle 6 Monate überprüft und aktualisiert werden, um mit der Browser-Landschaft Schritt zu halten.

---

**Letzte Aktualisierung:** Januar 2025  
**Abdeckung:** ~95% aller Browser-Nutzer weltweit
