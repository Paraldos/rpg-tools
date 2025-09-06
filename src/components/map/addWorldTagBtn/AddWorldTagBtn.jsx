import { SvgTag } from "../../../utils/svgs";
import { useSectorStore } from "../../../utils/store";

export default function AddWroldTagBtn() {
  const addWorldTag = useSectorStore((s) => s.addWorldTag);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);

  return (
    <button
      className="symbolBtn"
      onClick={() => addWorldTag(selectedWorldIndex)}
    >
      <SvgTag />
    </button>
  );
}
