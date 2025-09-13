import { useSectorStore } from "../../utils/store";
import { SvgTag } from "../svgs/Svgs";
import { addSectorTag } from "../../utils/sectorHelper";

export default function SectorInfoAddTag() {
  const sectorTags = useSectorStore((s) => s.sector.tags);
  const noMoreTagsPossible = sectorTags.length >= 8;

  return (
    <div className="sectorInfo__addTag">
      <p>Aktionen</p>
      <button
        className={"symbolBtn"}
        onClick={addSectorTag}
        disabled={noMoreTagsPossible}
      >
        <SvgTag />
      </button>
    </div>
  );
}
