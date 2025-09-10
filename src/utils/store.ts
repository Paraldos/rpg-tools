import { create } from "zustand";
import { SectorStore } from "./types";
import { generateSector } from "./sectorHelper";

export const useSectorStore = create<SectorStore>((set) => ({
  sector: null,
  setSector: (sector) => set({ sector }),
  newSector: () =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector(),
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
