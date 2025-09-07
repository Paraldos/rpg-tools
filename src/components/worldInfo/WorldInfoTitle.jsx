import { useSectorStore } from "../../utils/store";

export default function WorldInfoTitle() {
  const selectedWorldIndex = useSectorStore((s) => s.selectedWorldIndex);
  const sector = useSectorStore((s) => s.sector);
  const selectedField = sector.fields[selectedWorldIndex[0]];

  return (
    <h3>
      {selectedField.title} {selectedWorldIndex[1] + 1}
    </h3>
  );
}
