import { create } from "zustand";
import { Sector } from "./utils/types";
import { generateSector } from "./utils/sectorHelper";

type SectorState = {
  sector: Sector | null;
  selectedFieldIndex: number | null;

  setSector: (sector: Sector | null) => void;
  setSelectedFieldIndex: (index: number | null) => void;
  newSector: (rows: number, columns: number) => void;
};

export const useSectorStore = create<SectorState>((set) => ({
  sector: null,
  selectedFieldIndex: null,

  setSector: (sector) => set({ sector }),
  setSelectedFieldIndex: (index) => set({ selectedFieldIndex: index }),

  newSector: (rows, columns) => {
    const sector = generateSector({ rows, columns });
    set({ sector, selectedFieldIndex: null });
  },
}));
