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
    if (worlds[i].title === "Leere") nullIndices.push(i);
  }

  const randomePosition = getRandomArrayItem(nullIndices);
  const newWorld = generateWorld();
  worlds[randomePosition] = newWorld;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function removeWorld() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const selectedField = sectorClone!.fields[state.selectedWorldIndex![0]];
  const worlds = selectedField.worlds;
  const selectedWorld = worlds[state.selectedWorldIndex![1]];
  const worldIndex = worlds.findIndex((el) => el === selectedWorld);
  worlds.splice(worldIndex, 1);

  useSectorStore.setState({
    sector: sectorClone,
    selectedInfo: "FieldInfo",
  });
}

export function updateFieldTitle(newTitle: string) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector!);
  sectorClone.fields[state.selectedFieldIndex!].title = newTitle;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function changeFieldType(newType: string) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedFieldIndex!];
  field.type = newType;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function reorderWorlds(reorderedWorlds = []) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedFieldIndex!];
  field.worlds = reorderedWorlds;
  useSectorStore.setState({
    sector: sectorClone,
  });
}
