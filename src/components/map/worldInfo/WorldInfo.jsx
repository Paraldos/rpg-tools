import "./worldInfo.css";
import { useSectorStore } from "../../../utils/store";
import XBtn from "../../xBtn/XBtn";
import AddWroldTagBtn from "../addWorldTagBtn/AddWorldTagBtn";

export default function WorldInfo() {
  const sector = useSectorStore((s) => s.sector);
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const resetSelection = useSectorStore((s) => s.resetSelection);
  const setSelectedFieldIndex = useSectorStore((s) => s.setSelectedFieldIndex);

  if (!sector || selectedWorldIndex == null) return null;

  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];

  const onClickXBtn = () => {
    resetSelection();
    setSelectedFieldIndex(selectedWorldIndex[0]);
  };

  return (
    <div className="worldInfo">
      <XBtn onClick={onClickXBtn} />
      <p className="fieldInfo__baseInfo">Feld: {selectedField.index + 1}</p>
      <h3>
        {selectedField.title} {selectedWorld.titleNumber}
      </h3>
      <ul>
        {selectedWorld.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <div className="worldInfo__add">
        <p>Hinzufügen</p>
        <AddWroldTagBtn />
      </div>
    </div>
  );
}
