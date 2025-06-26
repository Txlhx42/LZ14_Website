# 🚀 LZ14-Website Automatisches Setup Script
# Für Windows PowerShell

Write-Host "🚀 LZ14-Website Setup wird gestartet..." -ForegroundColor Green

# Prüfe Node.js
Write-Host "📋 Prüfe Voraussetzungen..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js gefunden: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js nicht gefunden! Bitte installieren Sie Node.js von https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Dependencies installieren
Write-Host "📦 Installiere Dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install fehlgeschlagen!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installiert" -ForegroundColor Green

# .env Datei erstellen
Write-Host "🔑 Erstelle .env Datei..." -ForegroundColor Yellow
if (Test-Path ".env") {
    Write-Host "⚠️  .env Datei existiert bereits. Überschreiben? (j/n)" -ForegroundColor Yellow
    $confirm = Read-Host
    if ($confirm -ne "j" -and $confirm -ne "y") {
        Write-Host "📄 .env Datei wird beibehalten" -ForegroundColor Blue
        goto :skipEnv
    }
}

# .env Datei schreiben
@"
VITE_SUPABASE_URL=https://rcnpdjcdnnnlohxblokv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbnBkamNkbm5ubG9oeGJsb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NzE4MDYsImV4cCI6MjA2NjU0NzgwNn0.RgxW95jdxEWM-y-PW6uCZle3fCGtdjC_I2W4UNkxL6E
"@ | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "✅ .env Datei erstellt" -ForegroundColor Green

:skipEnv

# .env prüfen
Write-Host "🔍 Prüfe .env Datei..." -ForegroundColor Yellow
if (Test-Path ".env") {
    $envContent = Get-Content ".env"
    if ($envContent -match "VITE_SUPABASE_URL" -and $envContent -match "VITE_SUPABASE_ANON_KEY") {
        Write-Host "✅ .env Datei korrekt konfiguriert" -ForegroundColor Green
    } else {
        Write-Host "❌ .env Datei unvollständig!" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ .env Datei nicht gefunden!" -ForegroundColor Red
    exit 1
}

# Test-Build
Write-Host "🧪 Teste Build-Prozess..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build erfolgreich" -ForegroundColor Green

# Fertig!
Write-Host ""
Write-Host "🎉 Setup erfolgreich abgeschlossen!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Nächste Schritte:" -ForegroundColor Yellow
Write-Host "   1. npm run dev        # Entwicklungsserver starten" -ForegroundColor White
Write-Host "   2. http://localhost:5173  # Website öffnen" -ForegroundColor White
Write-Host "   3. Admin-Login: admin@lz14.de + Ihr Passwort" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Nützliche Befehle:" -ForegroundColor Yellow
Write-Host "   npm run dev           # Development server" -ForegroundColor White
Write-Host "   npm run build         # Production build" -ForegroundColor White
Write-Host "   npm audit             # Security check" -ForegroundColor White
Write-Host ""

# Automatisch starten?
Write-Host "🚀 Entwicklungsserver jetzt starten? (j/n)" -ForegroundColor Yellow
$startDev = Read-Host
if ($startDev -eq "j" -or $startDev -eq "y") {
    Write-Host "🌐 Starte Entwicklungsserver..." -ForegroundColor Green
    npm run dev
} 