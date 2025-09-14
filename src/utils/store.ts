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

  presetRows: 12,
  setPresetRows: (newAmountOfRows) => set({ presetRows: newAmountOfRows }),

  presetColumns: 8,
  setPresetColumns: (newAmountOfRColumns) =>
    set({ presetColumns: newAmountOfRColumns }),

  openSectorInfo: () =>
    set({
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      selectedInfo: "SectorInfo",
    }),

  sectorTags: sectorTags,
  setSectorTags: (stringOfTags) =>
    set((state) => {
      const newArrayOfTags = stringOfTags.split(", ");
      return { sectorTags: newArrayOfTags };
    }),
  worldTypeTags: worldTypeTags,
  setWorldTypeTags: (stringOfTags) =>
    set((state) => {
      const newArrayOfTags = stringOfTags.split(", ");
      return { sectorTags: newArrayOfTags };
    }),
  worldSocietyTags: worldSocietyTags,
  setWorldSocietyTags: (stringOfTags) =>
    set((state) => {
      const newArrayOfTags = stringOfTags.split(", ");
      return { sectorTags: newArrayOfTags };
    }),
  worldGeneralTags: worldGeneralTags,
  setWorldGeneralTags: (stringOfTags) =>
    set((state) => {
      const newArrayOfTags = stringOfTags.split(", ");
      return { sectorTags: newArrayOfTags };
    }),
  stellarNames: stellarNames,
  setStellarNames: (stringOfTags) =>
    set((state) => {
      const newArrayOfTags = stringOfTags.split(", ");
      return { sectorTags: newArrayOfTags };
    }),

  sector: null,
  setSector: (sector) => set({ sector }),
  newSector: () =>
    set((state) => ({
      selectedInfo: null,
      oldselectedInfo: null,
      selectedFieldIndex: null,
      selectedWorldIndex: null,
      sector: generateSector(state.presetRows, state.presetColumns),
    })),

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
  toggleOptions: () =>
    set((state) =>
      state.selectedInfo === "Options"
        ? {
            selectedInfo: state.oldselectedInfo ?? null,
            oldselectedInfo: null,
          }
        : {
            oldselectedInfo: state.selectedInfo,
            selectedInfo: "Options",
          }
    ),
}));
