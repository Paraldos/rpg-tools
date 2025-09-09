import { create } from "zustand";
import { SectorState } from "./types";
import { generateSector } from "./sectorHelper";

export const useSectorStore = create<SectorState>((set, get) => ({
  sector: null,
  setSector: (sector) => set({ sector }),
  newSector: (rows, columns) =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector({ rows, columns }),
    }),

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
}));
