import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";

export default function WorldInfo() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);
  if (!selectedWorldIndex) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];

  return (
    <div className="worldInfo">
      <XBtn onClick={() => setSelectedFieldIndex(selectedWorldIndex[0])} />
      <p className="worldInfo__baseInfo">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <h1>
        {selectedField.title} {selectedWorld.titleNumber}
      </h1>
    </div>
  );
}
