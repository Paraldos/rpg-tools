import "./fieldInfo.css";
import { ChevronRight } from "../../../utils/svgs";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";

export default function FieldInfo({ selectedField, onAddWorld, onChangeType }) {
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
        {selectedField.worlds.map((world, i) => (
          <button key={i} className="fieldInfo__worldBtn">
            <b>{world.name}</b> ({world.tags.join(", ")})
            <ChevronRight />
          </button>
        ))}
      </>
    );
  }

  const fieldType = {
    Empty: "Leere",
    BlackHole: "Schwarzes Loch",
    Star: "Stern",
  };

  return (
    <div className="fieldInfo">
      <p>
        Typ: {selectedField.type}, Feld: {selectedField.index + 1}
      </p>
      {content}
      <ChangeFieldType
        fieldIndex={selectedField.index}
        onChangeType={onChangeType}
      />
    </div>
  );
}
