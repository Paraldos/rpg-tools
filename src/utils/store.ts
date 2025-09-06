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

  updateFieldTitle: (title: string) => void;
  changeFieldType: (index: number, newType: FieldType) => void;
  addWorld: (index: number) => void;
  addWorldTag: (fieldIndex: number, worldIndex: number) => void;
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
      selectedWorldIndex: indices,
      selectedFieldIndex: null,
    }),

  newSector: (rows, columns) =>
    set({
      sector: generateSector({ rows, columns }),
    }),

  updateFieldTitle: (newTitle) =>
    set((state) => {
      const sector = structuredClone(state.sector!);
      sector.fields[state.selectedFieldIndex!].title = newTitle;
      return { sector };
    }),

  addWorld: (index) =>
    set((state) => {
      const sector = structuredClone(state.sector!);
      const selectedField = sector.fields[index];
      const newWorld = generateWorld(selectedField.worlds?.length ?? 0);
      selectedField.worlds.push(newWorld);
      return { sector };
    }),

  addWorldTag: (fieldIndex, worldIndex) =>
    set((state) => {
      const sector = structuredClone(state.sector);
      const field = sector!.fields[fieldIndex];
      const world = field.worlds[worldIndex];
      const tags = world.tags;
      const newTag = generateAdditionalTag(tags);
      tags.push(newTag);
      return { sector };
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
}));
