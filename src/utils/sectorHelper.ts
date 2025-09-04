import { World, Star, BlackHole, Empty, Sector, Field } from "./types";
import { WORLD_TYPES, SOCIETY_TAGS, GENERAL_TAGS } from "../sector/worldTags";
import { STAR_NAMES } from "../sector/starNames";
import { rollDice } from "./random";
import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./array";

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
  const n = rollDice(3);
  return {
    type: "Stern",
    title,
    worlds: Array.from({ length: n }, (_, i) => generateWorld(title, i)),
  };
}

export function generateBlackHole(name?: string): BlackHole {
  return { type: "Schwarzes Loch", title: name ?? "Singularis" };
}

export function generateEmpty(name?: string): Empty {
  return { type: "Leere", title: name ?? "Void" };
}

export function shuffledStarNames() {
  return shuffleArray([...STAR_NAMES]);
}

export function generateSector({
  rows = 10,
  columns = 8,
}: { rows?: number; columns?: number } = {}): Sector {
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);

  const starNames = shuffleArray([...STAR_NAMES]);

  let fields: any[] = [];

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

  return { rows, columns, fields: fields as Field[], title: starNames.pop() };
}
