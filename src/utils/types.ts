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
