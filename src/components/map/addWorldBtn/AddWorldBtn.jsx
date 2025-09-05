import { SvgPlanet } from "../../../utils/svgs";
import { useSectorStore } from "../../../utils/store";

export default function AddWorldBtn() {
  const addWorld = useSectorStore((s) => s.addWorld);
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  const selectedField =
    sector && selectedFieldIndex != null
      ? sector.fields[selectedFieldIndex]
      : null;

  if (!selectedField) return null;

  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const canAddWorld = amountOfWorlds < 6;

  if (!canAddWorld) return null;

  return (
    <button
      className={"symbolBtn"}
      onClick={() => addWorld(selectedField.index)}
    >
      <SvgPlanet />
    </button>
  );
}
