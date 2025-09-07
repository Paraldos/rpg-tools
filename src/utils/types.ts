export type World = { tags: string[] };
export type Field = {
  index: number;
  row: number;
  column: number;
  type: "Stern" | "Schwarzes Loch" | "Leere";
  title: string;
  worlds: (World | null)[];
};
export type Sector = {
  rows: number;
  columns: number;
  fields: Field[];
  title?: string;
};
