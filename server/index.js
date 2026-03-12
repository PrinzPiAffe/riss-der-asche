const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 3000;

const dbPath = path.join(__dirname, "../database.sqlite");
const db = new sqlite3.Database(dbPath);

// Middleware
app.use(express.json());

// Beispielroute: Alle Quests abrufen
app.get("/api/quests", (req, res) => {
  db.all(
    "SELECT title, description, status, location_id FROM quests",
    [],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Fehler beim Abrufen der Quests" });
      } else {
        res.json(rows);
      }
    }
  );
});

// Beispielroute: Startseite
app.get("/", (req, res) => {
  res.send("Riss der Asche API ist online.");
});

// Statisches Ausliefern der React-App (nach Build)
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
