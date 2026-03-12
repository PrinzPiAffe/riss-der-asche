export interface Attributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Item {
  name: string;
  type: string;
  description: string;
  properties?: Record<string, any>;
  rarity: string;
  value: number;
}

export interface Spell {
  name: string;
  level: number;
  school: string;
  description: string;
  castingTime: string;
  duration: string;
  components: string[];
  range: string;
}

export interface QuestTask {
  id: number;
  description: string;
  completed: boolean;
}

export interface Quest {
  id: number;
  title: string;
  description: string;
  giver: string;
  location: string;
  tasks: QuestTask[];
  reward: {
    experience: number;
    gold: number;
    items: string[];
  };
  prerequisites: number[];
}

export interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  attributes: Attributes;
  maxHP: number;
  currentHP: number;
  experience: number;
  gold: number;
  inventory: Item[];
  spells: Spell[];
}
