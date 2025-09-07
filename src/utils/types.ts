export type World = { titleOffset: number; tags: string[] };
export type Star = { type: "Stern"; title: string; worlds: World[] };
export type BlackHole = { type: "Schwarzes Loch"; title: string };
export type Empty = { type: "Leere"; title: string };
export type FieldCore = { index: number; row: number; column: number };
export type Field = (Star | BlackHole | Empty) & FieldCore;
export type Sector = {
  rows: number;
  columns: number;
  fields: Field[];
  title?: string;
};

export type FieldType = Star["type"] | BlackHole["type"] | Empty["type"];
