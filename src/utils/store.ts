import { create } from "zustand";
import { Sector, FieldType } from "./types";
import {
  generateSector,
  generateWorld,
  generateAdditionalTag,
} from "./sectorHelper";

type SectorState = {
  sector: Sector | null;
  selectedFieldIndex: number | null;
  selectedWorldIndex: [number, number] | null;

  setSector: (sector: Sector | null) => void;
  setSelectedFieldIndex: (index: number | null) => void;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  newSector: (rows: number, columns: number) => void;

  addWorld: (worldIndex: number) => void;
  addWorldTag: (worldIndex: number) => void;
  changeFieldType: (index: number, newType: FieldType) => void;
  updateFieldTitle: (newTitle: string) => void;
  updateWorldTitle: (newTitle: string) => void;
  updateWorldTags: (newTags: string[]) => void;
  moveWorldAwayFromSun: () => void;
  moveWorldTowardsSun: () => void;
};

export const useSectorStore = create<SectorState>((set) => ({
  sector: null,
  selectedFieldIndex: null,
  selectedWorldIndex: null,

  setSector: (sector) => set({ sector }),

  setSelectedFieldIndex: (index) =>
    set({
      selectedWorldIndex: null,
      selectedFieldIndex: index,
    }),

  setSelectedWorldIndex: (indices) =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: indices,
    }),

  newSector: (rows, columns) =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector({ rows, columns }),
    }),

  addWorld: () =>
    set((state) => {
      const newSector = structuredClone(state.sector);
      const field = newSector!.fields[state.selectedFieldIndex!];
      const worlds = field.worlds;

      const newWorld = generateWorld();
      worlds.push(newWorld);

      const lastNullIdx = worlds.lastIndexOf(null);
      worlds.splice(lastNullIdx, 1);

      return { sector: newSector };
    }),

  updateFieldTitle: (newTitle) =>
    set((state) => {
      const newSector = structuredClone(state.sector!);
      newSector.fields[state.selectedFieldIndex!].title = newTitle;
      return { sector: newSector };
    }),

  addWorldTag: () =>
    set((state) => {
      const newSector = structuredClone(state.sector);
      const field = newSector!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      const tags = world!.tags;
      const newTag = generateAdditionalTag(tags);
      tags.push(newTag);
      return { sector: newSector };
    }),

  updateWorldTags: (newTags) =>
    set((state) => {
      const sector = structuredClone(state.sector);
      const field = sector!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      world!.tags = newTags;
      return { sector };
    }),

  updateWorldTitle: (newTitle) =>
    set((state) => {
      const newSector = structuredClone(state.sector);
      const field = newSector!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      world!.title = newTitle;
      return { sector: newSector };
    }),

  changeFieldType: (index, newType) =>
    set((state) => {
      if (!state.sector) return state;

      const updatedSector = { ...state.sector };
      const field: any = { ...updatedSector.fields[index] };

      field.type = newType;
      field.worlds = field.worlds ?? [];

      const fields = [...updatedSector.fields];
      fields[index] = field;

      return { sector: { ...updatedSector, fields } };
    }),

  moveWorldAwayFromSun: () =>
    set((state) => {
      const newSector = structuredClone(state.sector);
      const fieldIndex = state.selectedWorldIndex![0];
      const worldIndex = state.selectedWorldIndex![1];
      const field = newSector!.fields[fieldIndex];
      const worlds = field.worlds;

      if (worldIndex >= worlds.length - 1) return state;

      const [world] = worlds.splice(worldIndex, 1);
      worlds.splice(worldIndex + 1, 0, world);

      return {
        sector: newSector,
        selectedWorldIndex: [fieldIndex, worldIndex + 1],
      };
    }),

  moveWorldTowardsSun: () =>
    set((state) => {
      const newSector = structuredClone(state.sector);
      const fieldIndex = state.selectedWorldIndex![0];
      const worldIndex = state.selectedWorldIndex![1];
      const field = newSector!.fields[fieldIndex];
      const worlds = field.worlds;

      if (worldIndex <= 0) return state;

      const [world] = worlds.splice(worldIndex, 1);
      worlds.splice(worldIndex - 1, 0, world);

      return {
        sector: newSector,
        selectedWorldIndex: [fieldIndex, worldIndex - 1],
      };
    }),
}));
