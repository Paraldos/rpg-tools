import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";

import WorldInfoListOfTags from "./WorldInfoListOfTags";
import WorldInfoPositionControls from "./WorldInfoPositionControls";
import WorldInfoAddTag from "./WolrdInfoAddTag";

export default function WorldInfo() {
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const sector = useSectorStore((s) => s.sector);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);
  if (!selectedWorldIndex) return;

  const selectedField = sector.fields[selectedWorldIndex[0]];

  return (
    <div className="worldInfo">
      <XBtn onClick={() => setSelectedFieldIndex(selectedWorldIndex[0])} />
      <p className="worldInfo__baseInfo">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <h3>
        {selectedField.title} {selectedWorldIndex[1] + 1}
      </h3>
      <WorldInfoListOfTags />
      <WorldInfoAddTag />
      <WorldInfoPositionControls />
    </div>
  );
}
