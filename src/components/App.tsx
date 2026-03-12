import React, { useEffect, useState } from "react";
import { Character, Quest } from "./types";
import CharacterSheet from "./components/CharacterSheet";
import QuestBoard from "./components/QuestBoard";
import { sampleCharacter, loadQuests } from "./data";

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    // Initialen Charakter laden (hier als Dummy)
    setCharacter(sampleCharacter);

    // Quests laden (aus Seeds oder API)
    loadQuests().then((qs) => setQuests(qs));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Riss der Asche</h1>
      {character && (
        <div className="grid md:grid-cols-2 gap-4">
          <CharacterSheet character={character} />
          <QuestBoard quests={quests} />
        </div>
      )}
    </div>
  );
};

export default App;