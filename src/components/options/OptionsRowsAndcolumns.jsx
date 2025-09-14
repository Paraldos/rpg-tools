import { useSectorStore } from "../../utils/store";

export default function OptionsRowsAndColumns() {
  const presetRows = useSectorStore((s) => s.presetRows);
  const presetColumns = useSectorStore((s) => s.presetColumns);
  const setPresetRows = useSectorStore((s) => s.setPresetRows);
  const setPresetColumns = useSectorStore((s) => s.setPresetColumns);

  return (
    <div className="options__rowsAndColumns">
      <label htmlFor="options__rows">Reihen</label>
      <input
        id="options__rows"
        type="number"
        value={presetRows}
        min={1}
        max={20}
        onChange={(e) => setPresetRows(e.target.value)}
      />
      <label htmlFor="options__columns">Spalten</label>
      <input
        id="options__columns"
        type="number"
        value={presetColumns}
        min={1}
        max={20}
        onChange={(e) => setPresetColumns(e.target.value)}
      />
    </div>
  );
}
