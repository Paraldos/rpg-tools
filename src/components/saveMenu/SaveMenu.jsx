import { useSectorStore } from "../../utils/store";

export default function SaveMenu() {
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);

  if (!saveMenuOpen) return;

  return (
    <div>
      <h3>Laden und Speichern</h3>
    </div>
  );
}
