import { SvgText } from "../svgs/Svgs";
import { updateFieldTitle } from "../../utils/fieldHelper";
import { useSectorStore } from "../../utils/store";
import { updateSectorTitle } from "../../utils/sectorHelper";
import { updateWorldTitle } from "../../utils/worldHelper";

export default function InfoBoxTitle({ titleType }) {
  const sector = useSectorStore((s) => s.sector);
  let title = "";
  let changeTitle = () => null;

  if (titleType === "field") {
    const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
    const selectedField = sector.fields[selectedFieldIndex];
    title = selectedField.title;
    changeTitle = (newTitle) => updateFieldTitle(newTitle);
  } else if (titleType === "sector") {
    title = sector.title;
    changeTitle = (newTitle) => updateSectorTitle(newTitle);
  } else if (titleType === "world") {
    const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
    const selectedField = sector.fields[selectedWorldIndex[0]];
    const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];
    title = selectedWorld.title;
    changeTitle = (newTitle) => updateWorldTitle(newTitle);
  }

  return (
    <h2 className="infoBox__title">
      <input
        type="text"
        value={title}
        onChange={(e) => changeTitle(e.target.value)}
      />
      <SvgText />
    </h2>
  );
}
