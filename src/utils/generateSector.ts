import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./array";
import { rollDice } from "./random";
import { SOCIETY_TAGS, WORLD_TYPES, GENERAL_TAGS } from "../data/worldTags";
import { STAR_NAMES } from "../data/starNames";

export type World = { name: string; tags: string[] };

/**
 * Erzeugt eine Welt für ein Sternsystem.
 * @param starName  Name des Sterns (Systemnamens)
 * @param ordinal   0-basierter Index der Welt im System (für Nummerierung)
 */
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

export function generateSector({ rows = 10, columns = 8 } = {}) {
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);
  const starNames = shuffleArray([...STAR_NAMES]);
  let fields: any[] = [];

  const getStar = (starName?: string) => {
    const n = rollDice(3);
    return {
      type: "Star",
      title: starName ?? "Nova",
      worlds: Array.from({ length: n }, (_, i) =>
        generateWorld(starName ?? "Nova", i)
      ),
    };
  };

  const getBlackHole = (starName?: string) => ({
    type: "Black Hole",
    title: starNames.pop(),
  });

  const getEmpty = () => ({
    type: "Empty",
    title: starNames.pop(),
  });

  for (let i = 0; i < amountOfBlackHoles; i++) fields.push(getBlackHole());

  for (let i = 0; i < amountOfStars; i++) fields.push(getStar(starNames.pop()));

  while (fields.length < amountOfFields) fields.push(getEmpty());

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
