import { useSectorStore } from "./store";
import { getRandomArrayItem } from "./generalHelper";
import { generateWorld } from "./sectorHelper";

export function addWorld() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedFieldIndex!];
  const worlds = field.worlds;

  const nullIndices: number[] = [];
  for (let i = 0; i < worlds.length; i++) {
    if (worlds[i] === null) nullIndices.push(i);
  }

  const randomePosition = getRandomArrayItem(nullIndices);
  const newWorld = generateWorld();
  worlds[randomePosition] = newWorld;

  useSectorStore.setState({
    sector: sectorClone,
  });
}
