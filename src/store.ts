import { create } from "zustand";
import { Sector, FieldType } from "./utils/types";
import { generateSector, generateWorld } from "./utils/sectorHelper";

type SectorState = {
  sector: Sector | null;
  selectedFieldIndex: number | null;

  setSector: (sector: Sector | null) => void;
  setSelectedFieldIndex: (index: number | null) => void;
  newSector: (rows: number, columns: number) => void;

  changeFieldType: (index: number, newType: FieldType) => void;
  addWorld: (index: number) => void;
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

  addWorld: (index) =>
    set((state) => {
      if (!state.sector) return state;

      const previousSector = state.sector;

      const selectedField = previousSector.fields[index];
      const newWorld = generateWorld(
        selectedField.title,
        selectedField.worlds?.length ?? 0
      );
      const updatedField = {
        ...selectedField,
        worlds: [...(selectedField.worlds ?? []), newWorld],
      };
      const newFields = [...previousSector.fields];
      newFields[index] = updatedField;

      return { sector: { ...previousSector, fields: newFields } };
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
