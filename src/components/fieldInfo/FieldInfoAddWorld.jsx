import { SvgPlanet } from "../svgs/Svgs";
import { useSectorStore } from "../../utils/store";
import { addWorld } from "../../utils/fieldHelper";

export default function FieldInfoAddWorld() {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const selectedField = sector.fields[selectedFieldIndex];
  const amountOfWorlds =
    selectedField?.worlds?.filter((world) => world.title !== "Leere").length ??
    0;
  const noMoreWorldsPossible = amountOfWorlds >= 5;

  if (selectedField.type != "Stern") return;

  return (
    <div className="fieldInfo__addWorld">
      <p>Hinzufügen</p>
      <button
        className={"symbolBtn"}
        onClick={addWorld}
        disabled={noMoreWorldsPossible}
      >
        <SvgPlanet />
      </button>
    </div>
  );
}
