import { create } from "zustand";
import { SectorStore } from "./types";
import { generateSector } from "./sectorHelper";
import {
  worldTypeTags,
  worldSocietyTags,
  worldGeneralTags,
  sectorTags,
  stellarNames,
} from "./tags";

export const useSectorStore = create<SectorStore>((set) => ({
  selectedInfo: null,
  oldselectedInfo: null,

  openSectorInfo: () =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      selectedInfo: "SectorInfo",
    }),

  worldTypeTags: worldTypeTags,
  worldSocietyTags: worldSocietyTags,
  worldGeneralTags: worldGeneralTags,
  sectorTags: sectorTags,
  stellarNames: stellarNames,

  sector: null,
  setSector: (sector) => set({ sector }),
  newSector: () =>
    set({
      selectedInfo: null,
      oldselectedInfo: null,
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector(),
    }),

  selectedFieldIndex: null,
  setSelectedFieldIndex: (index) =>
    set({
      selectedInfo: "FieldInfo",
      selectedFieldIndex: index,
      selectedWorldIndex: null,
    }),

  selectedWorldIndex: null,
  setSelectedWorldIndex: (indices) =>
    set({
      selectedInfo: "WorldInfo",
      selectedWorldIndex: indices,
    }),

  toggleSaveMenu: () =>
    set((state) =>
      state.selectedInfo === "SaveMenu"
        ? {
            selectedInfo: state.oldselectedInfo ?? null,
            oldselectedInfo: null,
          }
        : {
            oldselectedInfo: state.selectedInfo,
            selectedInfo: "SaveMenu",
          }
    ),
  toggleOptionsMenu: () =>
    set((state) =>
      state.selectedInfo === "OptionsMenu"
        ? {
            selectedInfo: state.oldselectedInfo ?? null,
            oldselectedInfo: null,
          }
        : {
            oldselectedInfo: state.selectedInfo,
            selectedInfo: "OptionsMenu",
          }
    ),
}));
