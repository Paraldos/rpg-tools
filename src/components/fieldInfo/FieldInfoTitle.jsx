import { SvgText } from "../../utils/svgs";
import { useSectorStore } from "../../utils/store";

export default function FieldInfoTitle() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);
  const updateFieldTitle = useSectorStore((s) => s.updateFieldTitle);

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
