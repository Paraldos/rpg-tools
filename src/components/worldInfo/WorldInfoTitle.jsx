import { useSectorStore } from "../../utils/store";
import { SvgText } from "../svgs/Svgs";
import { updateWorldTitle } from "../../utils/worldHelper";

export default function WorldInfoTitle() {
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const sector = useSectorStore((s) => s.sector);
  const selectedField = sector.fields[selectedWorldIndex[0]];
  const selectedWorld = selectedField.worlds[selectedWorldIndex[1]];

  return (
    <h2 className="worldInfo__title">
      <input
        className="h2"
        type="text"
        value={selectedWorld.title}
        aria-label="Name der Welt"
        placeholder={selectedField.title + " " + (selectedWorldIndex[1] + 1)}
        onChange={(e) => updateWorldTitle(e.target.value)}
      />
      <SvgText />
    </h2>
  );
}
