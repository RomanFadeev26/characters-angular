import type {Dices} from './dices.entity';
import {Currency} from './money.entity';

export type Class = {
  type: 'wizard' | 'fighter' | 'rogue';
  level: number;
};

export type Races = 'ork' | 'human' | 'elf' | 'dwarf';

export type MainCharacteristics = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export type Perks = {
  proficiency: MainCharacteristics[];
  'saving-throws': MainCharacteristics[];
};

export type DeathSaves = {
  death: 0 | 1 | 2 | 3;
  life: 0 | 1 | 2 | 3;
};

export type DiceHitpoints = Record<Dices, number>;

export type Hitpoints = {
  current: number;
  maximum: number;
  temporarily: number;
  dices: DiceHitpoints;
};

export type Alignment = 'LE, NE, CE, LN, NN, CN, LG, NG, CG';

export type Weapon = {
  name: string;
  'attack-bonus': number;
  damage: `${number}${Dices} + ${number}`
};

export type Character = {
  id: number;
  level: number;
  name: string;
  classes: Class[];
  race: Races;
  photo: string;
  perks: Perks;
  'death-saves': DeathSaves;
  speed: number;
  'proficiency-bonus': number;
  'base-characteristics': Record<MainCharacteristics, number>;
  hitpoints: Hitpoints;
  experience: number;
  alignment: Alignment;
  armor: number;
  weapons: Weapon[];
  languages: string[];
  'other-proficiencies': string[];
  equipment: {
    money: Record<Currency, number>;
    other: Array<{
      name: string;
      quantity: number;
    }>
  };
  'personality-traits': string;
  ideals: string;
  bonds: string;
  flaws: string;
  features: string[];
};
