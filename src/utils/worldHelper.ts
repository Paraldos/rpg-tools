import { useSectorStore } from "./store";
import { generateAdditionalTag } from "./sectorHelper";

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
    selectedFieldIndex: state.selectedWorldIndex![0],
    selectedWorldIndex: null,
  });
}

export function addWorldTag() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedWorldIndex![0]];
  const world = field.worlds[state.selectedWorldIndex![1]];
  const tags = world!.tags;
  const newTag = generateAdditionalTag(tags);
  tags.push(newTag);

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function removeWorldTag(tagIndex: number) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedWorldIndex![0]];
  const world = field.worlds[state.selectedWorldIndex![1]];
  const tags = world!.tags;
  tags.splice(tagIndex, 1);

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function updateWorldTitle(newTitle: string) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedWorldIndex![0]];
  const world = field.worlds[state.selectedWorldIndex![1]];
  world!.title = newTitle;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function updateWorldTags(newTags: string[]) {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const field = sectorClone!.fields[state.selectedWorldIndex![0]];
  const world = field.worlds[state.selectedWorldIndex![1]];
  world!.tags = newTags;

  useSectorStore.setState({
    sector: sectorClone,
  });
}

export function moveWorldAwayFromSun() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const fieldIndex = state.selectedWorldIndex![0];
  const worldIndex = state.selectedWorldIndex![1];
  const field = sectorClone!.fields[fieldIndex];
  const worlds = field.worlds;

  if (worldIndex >= worlds.length - 1) return;

  const [world] = worlds.splice(worldIndex, 1);
  worlds.splice(worldIndex + 1, 0, world);

  useSectorStore.setState({
    sector: sectorClone,
    selectedWorldIndex: [fieldIndex, worldIndex + 1],
  });
}

// moveWorldTowardsSun
export function moveWorldTowardsSun() {
  const state = useSectorStore.getState();
  const sectorClone = structuredClone(state.sector);
  const fieldIndex = state.selectedWorldIndex![0];
  const worldIndex = state.selectedWorldIndex![1];
  const field = sectorClone!.fields[fieldIndex];
  const worlds = field.worlds;

  if (worldIndex <= 0) return;

  const [world] = worlds.splice(worldIndex, 1);
  worlds.splice(worldIndex - 1, 0, world);

  useSectorStore.setState({
    sector: sectorClone,
    selectedWorldIndex: [fieldIndex, worldIndex - 1],
  });
}
