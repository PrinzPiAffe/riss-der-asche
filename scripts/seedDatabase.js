const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname, "../database.sqlite");
const schemaPath = path.join(__dirname, "../schema.sql");
const seedData = {
  locations: require("../seeds/seed_locations.json"),
  npcs: require("../seeds/seed_npcs.json"),
  items: require("../seeds/seed_items.json"),
  spells: require("../seeds/seed_spells.json"),
  quests: require("../seeds/seed_quests.json")
};

const db = new sqlite3.Database(dbPath);

function runSchema() {
  const schema = fs.readFileSync(schemaPath, "utf8");
  return new Promise((resolve, reject) => {
    db.exec(schema, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function seedTable(table, records) {
  return new Promise((resolve, reject) => {
    if (!records || records.length === 0) return resolve();
    // Dynamisch Spalten ermitteln
    const columns = Object.keys(records[0]);
    const placeholders = columns.map(() => "?").join(", ");
    const stmt = db.prepare(
      `INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders})`
    );
    db.serialize(() => {
      records.forEach((record) => {
        stmt.run(columns.map((c) => JSON.stringify(record[c] ?? record[c])));
      });
      stmt.finalize((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });
}

async function seedAll() {
  try {
    await runSchema();
    await seedTable("locations", seedData.locations);
    await seedTable("npcs", seedData.npcs);
    await seedTable("items", seedData.items);
    await seedTable("spells", seedData.spells);
    // Quests: map location and giver names to IDs nicht implementiert, daher als Text speichern
    await seedTable(
      "quests",
      seedData.quests.map((q) => ({
        title: q.title,
        description: q.description,
        status: q.status,
        location_id: null,
        giver_npc_id: null,
        reward: JSON.stringify(q.reward)
      }))
    );
    console.log("Seeding abgeschlossen");
    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
}

seedAll();
