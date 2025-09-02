import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./array";
import { rollDice } from "./random";
import { SOCIETY_TAGS, WORLD_TYPES, GENERAL_TAGS } from "../data/worldTags";
import { STAR_NAMES } from "../data/starNames";

export type World = { name: string; tags: string[] };
export type Star = { type: "Star"; title: string; worlds: World[] };
export type BlackHole = { type: "Black Hole"; title: string };
export type Empty = { type: "Empty"; title: string };
export type FieldCore = { index: number; row: number; column: number };
export type Field = (Star | BlackHole | Empty) & Partial<FieldCore>;

export function generateWorld(starName: string, ordinal: number): World {
  const planetNumber = ordinal * 2 + rollDice(2);
  return {
    name: `${starName} ${planetNumber}`,
    tags: [
      getWeightedRandomArrayItem(WORLD_TYPES)!,
      getWeightedRandomArrayItem(SOCIETY_TAGS)!,
      getRandomArrayItem(GENERAL_TAGS)!,
    ],
  };
}

export function generateStar(name?: string): Star {
  const title = name ?? "Nova";
  const n = rollDice(3); // 1..3
  return {
    type: "Star",
    title,
    worlds: Array.from({ length: n }, (_, i) => generateWorld(title, i)),
  };
}

export function generateBlackHole(name?: string): BlackHole {
  return {
    type: "Black Hole",
    title: name ?? "Singularis",
  };
}

export function generateEmpty(name?: string): Empty {
  return {
    type: "Empty",
    title: name ?? "Void",
  };
}

export function generateSector({ rows = 10, columns = 8 } = {}) {
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);

  const starNames = shuffleArray([...STAR_NAMES]);

  let fields: Field[] = [];

  for (let i = 0; i < amountOfBlackHoles; i++) {
    fields.push(generateBlackHole(starNames.pop()));
  }

  for (let i = 0; i < amountOfStars; i++) {
    fields.push(generateStar(starNames.pop()));
  }

  while (fields.length < amountOfFields) {
    fields.push(generateEmpty(starNames.pop()));
  }

  fields = shuffleArray(fields);

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const index = row * columns + column;
      fields[index].index = index;
      fields[index].row = row;
      fields[index].column = column;
    }
  }

  return { rows, columns, fields, title: starNames.pop() };
}
