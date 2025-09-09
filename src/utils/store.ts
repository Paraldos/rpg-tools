import { create } from "zustand";
import { Sector } from "./types";
import {
  generateSector,
  generateWorld,
  generateAdditionalTag,
} from "./sectorHelper";
import { getRandomArrayItem } from "./generalHelper";

type SectorState = {
  sector: Sector | null;
  setSector: (sector: Sector | null) => void;

  selectedFieldIndex: number | null;
  setSelectedFieldIndex: (index: number | null) => void;

  selectedWorldIndex: [number, number] | null;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  saveMenuOpen: boolean | null;
  toggleSaveMenu: () => void;

  newSector: (rows: number, columns: number) => void;

  removeWorld: () => void;
  updateFieldTitle: (newTitle: string) => void;
  changeFieldType: (newType: string) => void;

  addWorldTag: () => void;
  removeWorldTag: (tagIndex: number) => void;
  updateWorldTitle: (newTitle: string) => void;
  updateWorldTags: (newTags: string[]) => void;
  moveWorldAwayFromSun: () => void;
  moveWorldTowardsSun: () => void;
};

export const useSectorStore = create<SectorState>((set, get) => ({
  sector: null,
  setSector: (sector) => set({ sector }),

  selectedFieldIndex: null,
  setSelectedFieldIndex: (index) =>
    set({
      selectedWorldIndex: null,
      saveMenuOpen: null,
      selectedFieldIndex: index,
    }),

  selectedWorldIndex: null,
  setSelectedWorldIndex: (indices) =>
    set({
      selectedFieldIndex: null,
      saveMenuOpen: null,
      selectedWorldIndex: indices,
    }),

  saveMenuOpen: null,
  toggleSaveMenu: () =>
    set((state) => ({
      saveMenuOpen: !state.saveMenuOpen,
    })),

  newSector: (rows, columns) =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector({ rows, columns }),
    }),

  removeWorld: () =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const selectedField = sectorClone!.fields[state.selectedWorldIndex![0]];
      const worlds = selectedField.worlds;
      const selectedWorld = worlds[state.selectedWorldIndex![1]];

      const worldIndex = worlds.findIndex((el) => el === selectedWorld);
      worlds.splice(worldIndex, 1);

      return {
        sector: sectorClone,
        selectedFieldIndex: state.selectedWorldIndex![0],
        selectedWorldIndex: null,
      };
    }),

  updateFieldTitle: (newTitle) =>
    set((state) => {
      const sectorClone = structuredClone(state.sector!);
      sectorClone.fields[state.selectedFieldIndex!].title = newTitle;
      return { sector: sectorClone };
    }),

  changeFieldType: (newType) =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const field = sectorClone!.fields[state.selectedFieldIndex!];
      field.type = newType;
      return { sector: sectorClone };
    }),

  addWorldTag: () =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const field = sectorClone!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      const tags = world!.tags;
      const newTag = generateAdditionalTag(tags);
      tags.push(newTag);
      return { sector: sectorClone };
    }),

  removeWorldTag: (tagIndex) =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const field = sectorClone!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      const tags = world!.tags;
      tags.splice(tagIndex, 1);
      return { sector: sectorClone };
    }),

  updateWorldTitle: (newTitle) =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const field = sectorClone!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      world!.title = newTitle;
      return { sector: sectorClone };
    }),

  updateWorldTags: (newTags) =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const field = sectorClone!.fields[state.selectedWorldIndex![0]];
      const world = field.worlds[state.selectedWorldIndex![1]];
      world!.tags = newTags;
      return { sector: sectorClone };
    }),

  moveWorldAwayFromSun: () =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const fieldIndex = state.selectedWorldIndex![0];
      const worldIndex = state.selectedWorldIndex![1];
      const field = sectorClone!.fields[fieldIndex];
      const worlds = field.worlds;

      if (worldIndex >= worlds.length - 1) return state;

      const [world] = worlds.splice(worldIndex, 1);
      worlds.splice(worldIndex + 1, 0, world);

      return {
        sector: sectorClone,
        selectedWorldIndex: [fieldIndex, worldIndex + 1],
      };
    }),

  moveWorldTowardsSun: () =>
    set((state) => {
      const sectorClone = structuredClone(state.sector);
      const fieldIndex = state.selectedWorldIndex![0];
      const worldIndex = state.selectedWorldIndex![1];
      const field = sectorClone!.fields[fieldIndex];
      const worlds = field.worlds;

      if (worldIndex <= 0) return state;

      const [world] = worlds.splice(worldIndex, 1);
      worlds.splice(worldIndex - 1, 0, world);

      return {
        sector: sectorClone,
        selectedWorldIndex: [fieldIndex, worldIndex - 1],
      };
    }),
}));
