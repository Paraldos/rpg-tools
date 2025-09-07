import { World, Star, BlackHole, Empty, Sector, Field } from "./types";
import {
  WORLD_TYPES,
  SOCIETY_TAGS,
  GENERAL_TAGS,
  FIELD_TITLES,
} from "../sector/worldTags";
import { rollDice } from "./random";
import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./array";

export function generateWorld(ordinal: number): World {
  return {
    titleOffset: rollDice(2),
    tags: [
      getWeightedRandomArrayItem(WORLD_TYPES)!,
      getWeightedRandomArrayItem(SOCIETY_TAGS)!,
      getRandomArrayItem(GENERAL_TAGS)!,
    ],
  };
}

export function generateAdditionalTag(usedTags: string[]) {
  const availableTags = GENERAL_TAGS.filter((tag) => !usedTags.includes(tag));
  return getRandomArrayItem(availableTags);
}

export function generateStar(starTitle?: string): Star {
  const title = starTitle ?? "Nova";
  const n = rollDice(3);
  return {
    type: "Stern",
    title,
    worlds: Array.from({ length: n }, (_, i) => generateWorld(i)),
  };
}

export function generateBlackHole(blackHoleTitle?: string): BlackHole {
  return { type: "Schwarzes Loch", title: blackHoleTitle ?? "Singularis" };
}

export function generateEmpty(emptyTitle?: string): Empty {
  return { type: "Leere", title: emptyTitle ?? "Void" };
}

export function generateSector({
  rows = 10,
  columns = 8,
}: { rows?: number; columns?: number } = {}): Sector {
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);

  const starNames = shuffleArray([...FIELD_TITLES]);

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
