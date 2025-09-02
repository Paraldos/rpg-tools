import "./fieldInfo.css";
import { ChevronRight } from "../../../utils/svgs";
import ChangeFieldType from "../changeFieldType/ChangeFieldType";

export default function FieldInfo({ selectedField, onAddWorld, onChangeType }) {
  if (!selectedField) return null;

  let content = null;
  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const canAddWorld = amountOfWorlds < 6;

  if (selectedField.type == "Black Hole") {
    content = <h2>{selectedField.title}</h2>;
  }

  if (selectedField.type == "Star") {
    content = (
      <>
        <h2>{selectedField.title}</h2>
        {selectedField.worlds.map((world, i) => (
          <button key={i} className="fieldInfo__worldBtn">
            <b>{world.name}</b> ({world.tags.join(", ")})
            <ChevronRight />
          </button>
        ))}
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p>Typ: Schwarzes Loch, Feld: {selectedField.index + 1}</p>
      {content}
      <ChangeFieldType
        fieldIndex={selectedField.index}
        onChangeType={onChangeType}
      />
    </div>
  );
}
