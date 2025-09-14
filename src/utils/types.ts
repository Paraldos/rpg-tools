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

  presetRows: number;
  setPresetRows: (newAmountOfRows: number) => void;
  presetColumns: number;
  setPresetColumns: (newAmountOfColumns: number) => void;

  sectorTags: string[];
  setSectorTags: (newListOfTags: string) => void;
  worldTypeTags: string[];
  setWorldTypeTags: (newListOfTags: string) => void;
  worldSocietyTags: string[];
  setWorldSocietyTags: (newListOfTags: string) => void;
  worldGeneralTags: string[];
  setWorldGeneralTags: (newListOfTags: string) => void;
  stellarNames: string[];
  setStellarNames: (newListOfTags: string) => void;

  openSectorInfo: () => void;

  sector: Sector | null;
  setSector: (sector: Sector | null) => void;
  newSector: () => void;

  selectedFieldIndex: number | null;
  setSelectedFieldIndex: (index: number | null) => void;

  selectedWorldIndex: [number, number] | null;
  setSelectedWorldIndex: (indices: [number, number] | null) => void;

  toggleSaveMenu: () => void;
  toggleOptions: () => void;
};
export type WorldTypes = string[];
export type SocietyTags = string[];
export type GeneralTags = string[];
export type StellarTitles = string[];
export type SectorTags = string[];
