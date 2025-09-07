import { SvgTag } from "../../utils/svgs";
import { useSectorStore } from "../../utils/store";

export default function AddTagBtn() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const addWorldTag = useSectorStore((s) => s.addWorldTag);

  if (!selectedWorldIndex) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
  const tags = selectedWorld.tags;
  const noMoreTagsPossible = tags.length >= 8;

  return (
    <button
      className={"symbolBtn"}
      onClick={addWorldTag}
      disabled={noMoreTagsPossible}
    >
      <SvgTag />
    </button>
  );
}
