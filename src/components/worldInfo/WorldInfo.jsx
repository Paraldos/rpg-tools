import "./worldInfo.css";
import { useSectorStore } from "../../utils/store";
import XBtn from "../xBtn/XBtn";
import WorldInfoTitle from "./WorldInfoTitle";
import WorldInfoListOfTags from "./WorldInfoListOfTags";
import WorldInfoPositionControls from "./WorldInfoPositionControls";
import WorldInfoAddTag from "./WolrdInfoAddTag";

export default function WorldInfo() {
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);
  const sector = useSectorStore((s) => s.sector);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);

  if (!selectedWorldIndex || saveMenuOpen) return;

  const selectedField = sector.fields[selectedWorldIndex[0]];

  return (
    <div className="worldInfo">
      <XBtn onClick={() => setSelectedFieldIndex(selectedWorldIndex[0])} />
      <p className="worldInfo__baseInfo smallText">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <WorldInfoTitle />
      <WorldInfoListOfTags />
      <WorldInfoAddTag />
      <WorldInfoPositionControls />
    </div>
  );
}
