import "./options.css";
import { useSectorStore } from "../../utils/store";
import OptionsRowsAndColumns from "./OptionsRowsAndcolumns";

export default function Options() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);

  const sectorTags = useSectorStore((s) => s.sectorTags);
  const setWorldTypeTags = useSectorStore((s) => s.setWorldTypeTags);

  const worldTypeTags = useSectorStore((s) => s.worldTypeTags);
  const worldSocietyTags = useSectorStore((s) => s.worldSocietyTags);
  const worldGeneralTags = useSectorStore((s) => s.worldGeneralTags);
  const stellarNames = useSectorStore((s) => s.stellarNames);

  if (selectedInfo !== "Options") return null;

  return (
    <div className="options">
      <h2>Options Menu</h2>
      <OptionsRowsAndColumns />

      <div>
        <h3>Eigenheiten</h3>
        <p className="smallText">(Komma separierte listen)</p>
      </div>
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
