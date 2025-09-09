import { SvgText } from "../svgs/Svgs";
import { useSectorStore } from "../../utils/store";
import { updateFieldTitle } from "../../utils/fieldHelper";

export default function FieldInfoTitle() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);

  const selectedField = sector.fields[selectedFieldIndex];

  return (
    <div className="fieldInfo__titleBox">
      <input
        className="fieldInfo__title"
        type="text"
        value={selectedField.title}
        aria-label="Name des Felds"
        onChange={(e) => updateFieldTitle(e.target.value)}
      />
      <SvgText />
    </div>
  );
}
