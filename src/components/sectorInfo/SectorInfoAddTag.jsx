import { useSectorStore } from "../../utils/store";
import { SvgTag } from "../svgs/Svgs";
import { addWorldTag } from "../../utils/worldHelper";

export default function SectorInfoAddTag() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);

  if (!selectedWorldIndex) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
  const tags = selectedWorld.tags;
  const noMoreTagsPossible = tags.length >= 8;

  return (
    <div className="sectorInfo__addTag">
      <p>Hinzufügen</p>
      <button
        className={"symbolBtn"}
        onClick={addWorldTag}
        disabled={noMoreTagsPossible}
      >
        <SvgTag />
      </button>
    </div>
  );
}
