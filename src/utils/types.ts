export type World = { id: string; title: string; tags: string[] };
export type Field = {
  id: string;
  row: number;
  column: number;
  type: string;
  title: string;
  worlds: World[];
};
export type Sector = {
  rows: number;
  columns: number;
  fields: Field[];
  title: string;
};
export type SectorStore = {
  selectedInfoMenu: string | null;
  oldSelectedInfoMenu: string | null;

  sector: Sector | null;
  setSector: (sector: Sector | null) => void;
  newSector: () => void;

  selectedFieldIndex: number | null;
  setSelectedFieldIndex: (index: number | null) => void;

  selectedWorldIndex: [number, number] | null;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  toggleSaveMenu: () => void;
};
export type WorldTypes = string[];
export type SocietyTags = string[];
export type GeneralTags = string[];
export type StellarTitles = string[];
export type SectorTags = string[];
