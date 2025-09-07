import { SvgPlanet } from "../../utils/svgs";
import { useSectorStore } from "../../utils/store";

export default function FieldInfoAddWorld() {
  const addWorld = useSectorStore((s) => s.addWorld);
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const selectedField = sector.fields[selectedFieldIndex];
  const amountOfWorlds =
    selectedField?.worlds?.filter((w) => w !== null).length ?? 0;
  const noMoreWorldsPossible = amountOfWorlds >= 5;

  return (
    <div className="fieldInfo__addWorld">
      <p>Hinzufügen</p>
      <button
        className={"symbolBtn"}
        onClick={() => addWorld()}
        disabled={noMoreWorldsPossible}
      >
        <SvgPlanet />
      </button>
    </div>
  );
}
