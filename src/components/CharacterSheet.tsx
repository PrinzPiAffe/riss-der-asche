import React from "react";
import { Character } from "../types";

interface Props {
  character: Character;
}

const CharacterSheet: React.FC<Props> = ({ character }) => {
  const { attributes } = character;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Charakterbogen</h2>
      <p><strong>Name:</strong> {character.name}</p>
      <p><strong>Volk:</strong> {character.race}</p>
      <p><strong>Klasse:</strong> {character.class}</p>
      <p><strong>Stufe:</strong> {character.level}</p>

      <h3 className="mt-3 font-semibold">Attribute</h3>
      <ul className="list-disc list-inside">
        <li>Stärke: {attributes.strength}</li>
        <li>Geschicklichkeit: {attributes.dexterity}</li>
        <li>Konstitution: {attributes.constitution}</li>
        <li>Intelligenz: {attributes.intelligence}</li>
        <li>Weisheit: {attributes.wisdom}</li>
        <li>Charisma: {attributes.charisma}</li>
      </ul>

      <h3 className="mt-3 font-semibold">Ressourcen</h3>
      <p>HP: {character.current_hp} / {character.max_hp}</p>
      <p>Erfahrung: {character.experience}</p>
      <p>Gold: {character.gold}</p>
    </div>
  );
};

export default CharacterSheet;
