import "./options.css";
import { useSectorStore } from "../../utils/store";

export default function Options() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  const presetRows = useSectorStore((s) => s.presetRows);
  const presetColumns = useSectorStore((s) => s.presetColumns);

  const sectorTags = useSectorStore((s) => s.sectorTags);
  const setWorldTypeTags = useSectorStore((s) => s.setWorldTypeTags);

  const worldTypeTags = useSectorStore((s) => s.worldTypeTags);
  const worldSocietyTags = useSectorStore((s) => s.worldSocietyTags);
  const worldGeneralTags = useSectorStore((s) => s.worldGeneralTags);
  const stellarNames = useSectorStore((s) => s.stellarNames);

  const setPresetRows = useSectorStore((s) => s.setPresetRows);
  const setPresetColumns = useSectorStore((s) => s.setPresetColumns);

  if (selectedInfo !== "Options") return null;

  return (
    <div className="options">
      <h2>Options Menu</h2>
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

      <h3>Eigenheiten</h3>
      <p>Komma separierte listen</p>
      <div>
        <label>Sektor: Besonderheiten</label>
        <textarea
          className="options__tagList"
          value={sectorTags.join(", ")}
          rows="3"
          onChange={(e) => setWorldTypeTags(e.target.value)}
        />
      </div>
      <div>
        <label>Welt: Biome</label>
        <textarea
          className="options__tagList"
          value={worldTypeTags.join(", ")}
          rows="3"
        />
      </div>
      <div>
        <label>Welt: Soziale Ordnung</label>
        <textarea
          className="options__tagList"
          value={worldSocietyTags.join(", ")}
          rows="3"
        />
      </div>
      <div>
        <label>Welt: Besonderheiten</label>
        <textarea
          className="options__tagList"
          value={worldGeneralTags.join(", ")}
          rows="3"
        />
      </div>
      <div>
        <label>Namen</label>
        <textarea
          className="options__tagList"
          value={stellarNames.join(", ")}
          rows="3"
        />
      </div>
    </div>
  );
}
