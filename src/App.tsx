import React, { useState } from 'react';
import CharacterSheet from './components/CharacterSheet';
import QuestBoard from './components/QuestBoard';
import { Character, Quest } from './types';
import { quests as initialQuests } from './data';

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: 'Abenteurer',
    level: 1,
    race: 'Mensch',
    class: 'Krieger',
    attributes: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    maxHP: 10,
    currentHP: 10,
    experience: 0,
    gold: 0,
    inventory: [],
    spells: [],
  });

  const [quests, setQuests] = useState<Quest[]>(initialQuests);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Riss der Asche</h1>
      <CharacterSheet character={character} />
      <QuestBoard quests={quests} onAccept={() => {}} onComplete={() => {}} />
    </div>
  );
};

export default App;
