import { SvgPlanet } from "../../utils/svgs";
import { useSectorStore } from "../../utils/store";

export default function AddWorldBtn() {
  const addWorld = useSectorStore((s) => s.addWorld);
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  const selectedField =
    sector && selectedFieldIndex != null
      ? sector.fields[selectedFieldIndex]
      : null;

  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const noMoreWorldsPossible = amountOfWorlds >= 6;

  return (
    <button
      className={"symbolBtn"}
      onClick={() => addWorld()}
      disabled={noMoreWorldsPossible}
    >
      <SvgPlanet />
    </button>
  );
}
