import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./array";
import { rollDice } from "./random";
import { SOCIETY_TAGS, WORLD_TYPES, GENERAL_TAGS } from "../data/worldTags";
import { STAR_NAMES } from "../data/starNames";

export function generateSector({ rows = 10, columns = 8 } = {}) {
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);
  const starNames = shuffleArray([...STAR_NAMES]);
  let fields: any[] = [];

  const getWorld = (starName: string, index: number) => {
    const planetNumber = index * 3 + rollDice(2);
    return {
      name: `${starName} ${planetNumber}`,
      tags: [
        getWeightedRandomArrayItem(WORLD_TYPES),
        getWeightedRandomArrayItem(SOCIETY_TAGS),
        getRandomArrayItem(GENERAL_TAGS),
      ],
    };
  };

  const getStar = (starName?: string) => {
    const n = rollDice(3);
    return {
      type: "Star",
      title: starName ?? "Nova",
      worlds: Array.from({ length: n }, (_, i) =>
        getWorld(starName ?? "Nova", i)
      ),
    };
  };

  const getBlackHole = (starName?: string) => ({
    type: "Black Hole",
    title: starName ?? "Singularis",
  });

  const getEmpty = () => ({ type: "Empty" });

  for (let i = 0; i < amountOfBlackHoles; i++)
    fields.push(getBlackHole(starNames.pop()));

  for (let i = 0; i < amountOfStars; i++) fields.push(getStar(starNames.pop()));

  while (fields.length < amountOfFields) fields.push(getEmpty());

  fields = shuffleArray(fields);

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const index = row * columns + column;
      fields[index].row = row;
      fields[index].column = column;
    }
  }
  return { rows, columns, fields, title: starNames.pop() };
}
