import "./fieldInfo.css";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";
import { SvgPlanet } from "../../../utils/svgs";
import WorldBtn from "../worldBtn/WorldBtn";
import { useSectorStore } from "../../../store";

export default function FieldInfo({ onOpenWorldInfo }) {
  const addWorld = useSectorStore((s) => s.addWorld);
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);

  const selectedField =
    sector && selectedFieldIndex != null
      ? sector.fields[selectedFieldIndex]
      : null;

  if (!selectedField) return null;

  let content = null;
  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const canAddWorld = amountOfWorlds < 6;

  if (selectedField.type == "Schwarzes Loch") {
    content = <h3>{selectedField.title}</h3>;
  }

  if (selectedField.type == "Stern") {
    content = (
      <>
        <h3>{selectedField.title}</h3>
        {selectedField.worlds.map((world, index) => (
          <WorldBtn
            key={index}
            world={world}
            fieldIndex={selectedField.index}
            worldIndex={index}
            onOpenWorldInfo={onOpenWorldInfo}
          />
        ))}

        {canAddWorld && (
          <div className="fieldInfo__addWorldBtn">
            <p>Hinzufügen</p>
            <button onClick={() => addWorld(selectedField.index)}>
              <SvgPlanet />
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p className="fieldInfo__baseInfo">
        Typ: {selectedField.type}, Feld: {selectedField.index + 1}
      </p>
      <div className="fieldInfo__content">{content}</div>
      <ChangeFieldType />
    </div>
  );
}
