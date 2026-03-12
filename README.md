# Riss der Asche

Dieses Projekt ist ein umfassendes Grundgerüst für ein textbasiertes Solo‑RPG im Dark‑Fantasy‑Stil. Es orientiert sich stark an den Mechaniken klassischer Tabletop‑Rollenspiele (z. B. D&D 5e) und stellt eine modulare Basis zur Verfügung, die als Desktop‑ oder Browser‑Spiel laufen kann.  

## Kernfunktionen

- **Charakterverwaltung**: Erstellung von Figuren inklusive Rasse, Klasse, Attributen, Fertigkeiten und Stufe.
- **Kampfsystem**: Rundenbasierter Kampf mit Aktionen, Bonusaktionen, Reaktionen, Zuständen, Angriffswürfen, Rüstungsklasse, Initiative usw.
- **Questsystem**: Haupt‑ und Nebenquests mit Questlog, Entscheidungsstrukturen und Belohnungen.
- **Datenbank**: Persistente Speicherung über eine Datenbank‑Abstraktion (z. B. SQLite), inklusive Savegames, Weltzustand, NPCs, Items, Zauber u. v. m.
- **Frontend**: React‑App mit Komponenten für Charakterbogen, Kampf, Questboard, Journal und Inventar.
- **Backend**: Express.js‑Server (Node.js) als API‑Schicht, vorbereitet für spätere KI‑Integration.

Das Ziel dieses Projekts ist es, eine solide Ausgangsbasis zu liefern, die unkompliziert erweitert werden kann: von der Darstellung zusätzlicher Klassen und Zauber über prozedurale Dungeon‑Logik bis hin zur Anbindung an das OpenAI‑API für KI‑Spielleitung.

## Struktur

```
riss-der-asche/
├── README.md
├── package.json        # Node‑/Frontend‑Abhängigkeiten
├── schema.sql          # SQL‑Schema für die persistente Datenbank
├── seeds/              # Beispielhafte Seed‑Dateien für Weltinhalt
├── src/
│   ├── App.tsx         # Haupteinstieg der React‑App
│   ├── index.tsx       # Rendern der React‑App
│   ├── components/     # UI‑Komponenten (Charakterbogen, Kampf etc.)
│   └── types.ts        # Gemeinsame Typschnittstelle
└── server/
    ├── index.js        # Express‑Server zur Bereitstellung der API
    ├── models/         # Datenbankmodelle
    └── routes/         # API‑Routen
```

Zum Einstieg kann die React‑App lokal via `npm run dev` gestartet werden, sofern Node.js installiert ist. Für den Datenbankteil kann zunächst SQLite genutzt werden, später lässt sich problemlos auf PostgreSQL oder Supabase migrieren.
