import { Quest, Item, Spell } from './types';

export const quests: Quest[] = [
  {
    id: 1,
    title: 'Fluch des Schwarzforsts',
    description: 'Die Bewohner von Haven klagen \u00fcber eine dunkle Macht im Schwarzforst.',
    giver: 'Meisterin Aurelia',
    location: 'Haven',
    tasks: [
      { id: 1, description: 'Untersuche den Schwarzforst und finde die Quelle des Fluchs', completed: false },
      { id: 2, description: 'Besiege den korrumpierten Baum und befreie den Wald', completed: false },
    ],
    reward: { experience: 50, gold: 10, items: ['Heiltrank'] },
    prerequisites: [],
  },
  {
    id: 2,
    title: 'Verschwundene Dorfbewohner',
    description: 'Mehrere Bewohner wurden in der N\u00e4he des Waldrands vermisst. Finde sie.',
    giver: 'Garros der Schmied',
    location: 'Haven',
    tasks: [
      { id: 1, description: 'Sprich mit den Angeh\u00f6rigen der Vermissten', completed: false },
      { id: 2, description: 'Finde die Spuren im Wald', completed: false },
      { id: 3, description: 'Rette die Dorfbewohner', completed: false },
    ],
    reward: { experience: 75, gold: 15, items: ['Lederpanzer'] },
    prerequisites: [1],
  },
  {
    id: 3,
    title: 'Rissforschung',
    description: 'Die Risse werden instabiler. Ylva ben\u00f6tigt Proben aus dem Rissrand.',
    giver: 'Kr\u00e4henpriesterin Ylva',
    location: 'Haven',
    tasks: [
      { id: 1, description: 'Reise zum Rissrand und sammle Rissenergieproben', completed: false },
      { id: 2, description: 'Bringe die Proben zu Ylva zur\u00fcck', completed: false },
    ],
    reward: { experience: 100, gold: 20, items: ['Magier-Hand'] },
    prerequisites: [],
  },
];

export const items: Item[] = [
  {
    name: 'Kurzschwert',
    type: 'weapon',
    description: 'Ein einfaches Kurzschwert.',
    rarity: 'common',
    value: 10,
    properties: { damage: '1W6', weight: 2 },
  },
  {
    name: 'Lederpanzer',
    type: 'armor',
    description: 'Schutz aus geh\u00e4rtetem Leder.',
    rarity: 'common',
    value: 15,
    properties: { ac: 11, weight: 10 },
  },
  {
    name: 'Heiltrank',
    type: 'consumable',
    description: 'Stellt Lebenspunkte wieder her.',
    rarity: 'common',
    value: 25,
    properties: { heal: '2W4+2' },
  },
];

export const spells: Spell[] = [
  {
    name: 'Magier-Hand',
    level: 0,
    school: 'Beschw\u00f6rung',
    description: 'Eine schwebende, geisterhafte Hand erscheint.',
    castingTime: '1 Aktion',
    duration: '1 Minute',
    components: ['V', 'G'],
    range: '9 m',
  },
  {
    name: 'Nebel Schritt',
    level: 2,
    school: 'Teleportation',
    description: 'Du verschwindest und teleportierst dich zu einem Punkt.',
    castingTime: '1 Bonusaktion',
    duration: 'Sofort',
    components: ['V'],
    range: '9 m',
  },
  {
    name: 'J\u00e4gerzeichen',
    level: 1,
    school: 'Verst\u00e4rkung',
    description: 'Du markierst ein Ziel und f\u00fcgst zus\u00e4tzlichen Schaden zu.',
    castingTime: '1 Bonusaktion',
    duration: '1 Stunde',
    components: ['V'],
    range: '27 m',
  },
];
