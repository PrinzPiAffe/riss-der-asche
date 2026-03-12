import React from "react";
import { Quest } from "../types";

interface Props {
  quests: Quest[];
}

const QuestBoard: React.FC<Props> = ({ quests }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Questboard</h2>
      {quests.map((quest, index) => (
        <div key={index} className="mb-4 border-b border-gray-700 pb-2">
          <h3 className="text-lg font-bold">{quest.title}</h3>
          <p className="text-sm">{quest.description}</p>
          <p className="text-sm text-yellow-200">
            Geber: {quest.giver} | Ort: {quest.location}
          </p>
          <p className="text-sm">
            Belohnung: {quest.reward.experience} XP, {quest.reward.gold} Gold
            {quest.reward.items.length > 0 && `, Items: ${quest.reward.items.join(", ")}`}
          </p>
          <p className="text-sm italic text-green-400">Status: {quest.status}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestBoard;
