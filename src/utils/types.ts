export type World = { title: string; tags: string[] };
export type Field = {
  index: number;
  row: number;
  column: number;
  type: string;
  title: string;
  worlds: (World | null)[];
};
export type Sector = {
  rows: number;
  columns: number;
  fields: Field[];
  title?: string;
};
export type SectorStore = {
  sector: Sector | null;
  setSector: (sector: Sector | null) => void;
  newSector: (rows: number, columns: number) => void;

  selectedFieldIndex: number | null;
  setSelectedFieldIndex: (index: number | null) => void;

  selectedWorldIndex: [number, number] | null;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  saveMenuOpen: boolean | null;
  toggleSaveMenu: () => void;
};
