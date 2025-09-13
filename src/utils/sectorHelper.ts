import { World, Sector, Field } from "./types";
import {
  rollDice,
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "./generalHelper";
import { useSectorStore } from "./store";
const MAX_AMOUNT_OF_WORLDS = 9;

export function addSectorTag() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const usedTags = sectorClone!.tags;
  const { sectorTags } = useSectorStore.getState();
  const availableTags = sectorTags.filter((tag) => !usedTags.includes(tag));
  usedTags.push(getRandomArrayItem(availableTags));
  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function removeSectorTag(tagIndex: number) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const tags = sectorClone!.tags;
  tags.splice(tagIndex, 1);

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function updateSectorTags(newTags: string[]) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  sectorClone!.tags = newTags;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function updateSectorTitle(newTitle: string) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector!);
  sectorClone.title = newTitle;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function generateWorld(): World {
  const { worldTypeTags, worldSocietyTags, worldGeneralTags } =
    useSectorStore.getState();

  return {
    id: crypto.randomUUID(),
    title: "",
    tags: [
      getWeightedRandomArrayItem(worldTypeTags)!,
      getWeightedRandomArrayItem(worldSocietyTags)!,
      getRandomArrayItem(worldGeneralTags)!,
    ],
  };
}

function makeEmptyWorld(): World {
  return { id: crypto.randomUUID(), title: "Leere", tags: [] };
}

export function generateStar(starTitle?: string): Field {
  const title = starTitle ?? "Nova";
  const numberOfWorlds = rollDice(3);
  const worldsArray: World[] = Array.from(
    { length: MAX_AMOUNT_OF_WORLDS },
    makeEmptyWorld
  );

  for (let i = 0; i < numberOfWorlds; i++) {
    worldsArray[i] = generateWorld();
  }
  shuffleArray(worldsArray);

  return {
    id: crypto.randomUUID(),
    index: 0,
    row: 0,
    column: 0,
    type: "Stern",
    title,
    worlds: worldsArray,
  };
}

export function generateBlackHole(blackHoleTitle?: string): Field {
  return {
    index: 0,
    row: 0,
    column: 0,
    type: "Schwarzes Loch",
    title: blackHoleTitle ?? "Singularis",
    worlds: Array.from({ length: MAX_AMOUNT_OF_WORLDS }, makeEmptyWorld),
  };
}

export function generateEmpty(emptyTitle?: string): Field {
  return {
    index: 0,
    row: 0,
    column: 0,
    type: "Leere",
    title: emptyTitle ?? "Oblivio",
    worlds: Array.from({ length: MAX_AMOUNT_OF_WORLDS }, makeEmptyWorld),
  };
}

export function generateSector({
  rows = 12,
  columns = 8,
}: { rows?: number; columns?: number } = {}): Sector {
  const { stellarNames, sectorTags } = useSectorStore.getState();
  const amountOfFields = rows * columns;
  const amountOfStars = Math.floor(amountOfFields / 4);
  const amountOfBlackHoles = Math.floor(amountOfFields / 20);
  const starNames = shuffleArray([...stellarNames]);

  const tagsOfCurrentSector = [];
  let listOfTags = [...sectorTags];
  listOfTags = shuffleArray(listOfTags);
  tagsOfCurrentSector.push(listOfTags.pop());
  tagsOfCurrentSector.push(listOfTags.pop());

  const fields: Field[] = [];
  for (let i = 0; i < amountOfBlackHoles; i++)
    fields.push(generateBlackHole(starNames.pop()));
  for (let i = 0; i < amountOfStars; i++)
    fields.push(generateStar(starNames.pop()));
  while (fields.length < amountOfFields)
    fields.push(generateEmpty(starNames.pop()));

  shuffleArray(fields);

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const index = row * columns + column;
      fields[index].index = index;
      fields[index].row = row;
      fields[index].column = column;
      if (!fields[index].id) fields[index].id = crypto.randomUUID();
    }
  }

  return {
    rows,
    columns,
    fields,
    title: starNames.pop() ?? "Sektor",
    tags: tagsOfCurrentSector as string[],
  };
}
