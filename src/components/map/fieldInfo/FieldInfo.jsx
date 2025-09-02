import "./fieldInfo.css";
import AddWorldBtn from "../addWorldBtn/AddWorldBtn";
import AddBlackHoleBtn from "../addBlackHoleBtn/AddBlackHoleBtn";

export default function FieldInfo({
  selectedField,
  onAddWorld,
  onAddBlackHole,
}) {
  if (!selectedField) return null;

  let content = null;
  const amountOfWorlds = selectedField.worlds?.length ?? 0;
  const canAddWorld = amountOfWorlds < 6;

  if (selectedField.type == "Empty") {
    content = (
      <>
        <p>Typ: Leere, Feld: {selectedField.index + 1}</p>
        <div className="fieldInfo__btns">
          <AddBlackHoleBtn onClick={onAddBlackHole} />
          {canAddWorld && <AddWorldBtn onClick={onAddWorld}></AddWorldBtn>}
        </div>
      </>
    );
  } else if (selectedField.type == "Black Hole") {
    content = (
      <>
        <p>Typ: Schwarzes Loch, Feld: {selectedField.index + 1}</p>
        <h2>{selectedField.title}</h2>
      </>
    );
  } else {
    content = (
      <>
        <p>Typ: Stern, Feld: {selectedField.index + 1}</p>
        <h2>{selectedField.title}</h2>
        {selectedField.worlds.map((world, i) => (
          <button key={i} className="fieldInfo__world">
            <b>{world.name}</b> ({world.tags.join(", ")})
          </button>
        ))}
        <div className="fieldInfo__btns">
          <AddBlackHoleBtn onClick={onAddBlackHole} />
          {canAddWorld && <AddWorldBtn onClick={onAddWorld}></AddWorldBtn>}
        </div>
      </>
    );
  }

  return <div className="fieldInfo">{content}</div>;
}
