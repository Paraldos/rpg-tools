import "./worldInfo.css";
import { useSectorStore } from "../../../utils/store";

export default function WorldInfo() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);

  if (!sector || selectedWorldIndex == null) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];

  return (
    <div className="worldInfo">
      <p className="fieldInfo__baseInfo">Feld: {selectedField.index + 1}</p>
      <h3>{selectedWorld.name}</h3>
    </div>
  );
}
