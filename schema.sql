-- SQL-Schema für die Persistenzschicht.
-- Dieses Schema ist für SQLite konzipiert, kann aber mit kleinen Änderungen auch auf
-- andere relationale Datenbanken übertragen werden (z. B. PostgreSQL).

-- Charaktere
CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    race TEXT NOT NULL,
    class TEXT NOT NULL,
    level INTEGER NOT NULL DEFAULT 1,
    strength INTEGER,
    dexterity INTEGER,
    constitution INTEGER,
    intelligence INTEGER,
    wisdom INTEGER,
    charisma INTEGER,
    max_hp INTEGER,
    current_hp INTEGER,
    experience INTEGER DEFAULT 0,
    gold INTEGER DEFAULT 0
);

-- Inventar
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id INTEGER,
    item_id INTEGER,
    quantity INTEGER DEFAULT 1,
    FOREIGN KEY (character_id) REFERENCES characters(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
);

-- Items
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT,           -- z. B. weapon, armor, consumable
    rarity TEXT,
    properties TEXT,     -- JSON-Serialisierung für Effekte/Eigenschaften
    value INTEGER
);

-- Zauber
CREATE TABLE IF NOT EXISTS spells (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    level INTEGER,
    school TEXT,
    description TEXT,
    casting_time TEXT,
    duration TEXT,
    components TEXT,
    range TEXT
);

-- Nichtspielercharaktere (NPCs)
CREATE TABLE IF NOT EXISTS npcs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,              -- Händler, Questgeber, Verbündeter etc.
    location TEXT,
    dialogue TEXT,          -- JSON-Serialisierung für Dialogbäume
    faction TEXT
);

-- Orte und Regionen
CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    region TEXT,
    adjacent_locations TEXT -- CSV-Liste der angrenzenden Orte
);

-- Quests
CREATE TABLE IF NOT EXISTS quests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'open', -- open, in_progress, complete
    location_id INTEGER,
    giver_npc_id INTEGER,
    reward TEXT,               -- JSON: Items/Gold/XP
    FOREIGN KEY (location_id) REFERENCES locations(id),
    FOREIGN KEY (giver_npc_id) REFERENCES npcs(id)
);

-- Fortschritt der Quests pro Charakter
CREATE TABLE IF NOT EXISTS quest_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id INTEGER,
    quest_id INTEGER,
    state TEXT,       -- accepted, completed, failed
    FOREIGN KEY (character_id) REFERENCES characters(id),
    FOREIGN KEY (quest_id) REFERENCES quests(id)
);

-- Kampfprotokoll (für die Nachverfolgung)
CREATE TABLE IF NOT EXISTS combat_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id INTEGER,
    enemy_name TEXT,
    log TEXT,
    result TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (character_id) REFERENCES characters(id)
);

-- Weltzustand (Flags und globale Variablen)
CREATE TABLE IF NOT EXISTS world_state (
    key TEXT PRIMARY KEY,
    value TEXT
);