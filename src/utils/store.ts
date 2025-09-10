import { create } from "zustand";
import { SectorStore } from "./types";
import { generateSector } from "./sectorHelper";

export const useSectorStore = create<SectorStore>((set) => ({
  selectedInfoMenu: null,
  oldSelectedInfoMenu: null,

  openSectorInfo: () =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      selectedInfoMenu: "SectorInfo",
    }),

  sector: null,
  setSector: (sector) => set({ sector }),
  newSector: () =>
    set({
      selectedInfoMenu: null,
      oldSelectedInfoMenu: null,
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector(),
    }),

  selectedFieldIndex: null,
  setSelectedFieldIndex: (index) =>
    set({
      selectedInfoMenu: "FieldInfo",
      selectedFieldIndex: index,
    }),

  selectedWorldIndex: null,
  setSelectedWorldIndex: (indices) =>
    set({
      selectedInfoMenu: "WorldInfo",
      selectedWorldIndex: indices,
    }),

  toggleSaveMenu: () =>
    set((state) =>
      state.selectedInfoMenu === "SaveMenu"
        ? {
            selectedInfoMenu: state.oldSelectedInfoMenu ?? null,
            oldSelectedInfoMenu: null,
          }
        : {
            oldSelectedInfoMenu: state.selectedInfoMenu,
            selectedInfoMenu: "SaveMenu",
          }
    ),
}));
