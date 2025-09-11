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
  tags: string[];
};
export type SectorStore = {
  selectedInfo: string | null;
  oldselectedInfo: string | null;

  worldTypeTags: string[];
  worldSocietyTags: string[];
  worldGeneralTags: string[];
  stellarNames: string[];
  sectorGeneralTags: string[];

  openSectorInfo: () => void;

  sector: Sector | null;
  setSector: (sector: Sector | null) => void;
  newSector: () => void;

  selectedFieldIndex: number | null;
  setSelectedFieldIndex: (index: number | null) => void;

  selectedWorldIndex: [number, number] | null;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  toggleSaveMenu: () => void;
  toggleOptionsMenu: () => void;
};
export type WorldTypes = string[];
export type SocietyTags = string[];
export type GeneralTags = string[];
export type StellarTitles = string[];
export type SectorTags = string[];
