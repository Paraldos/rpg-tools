import "./saveMenu.css";
import { useSectorStore } from "../../utils/store";
import { STORAGE_KEY_PREFIX } from "../../utils/storageKeys";
import { useEffect, useState } from "react";

export default function SaveMenu() {
  const sector = useSectorStore((s) => s.sector);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);
  const saveToSlot = useSectorStore((s) => s.saveToSlot);
  const loadFromSlot = useSectorStore((s) => s.loadFromSlot);
  const clearSlot = useSectorStore((s) => s.clearSlot);

  const [slotInfos, setSlotInfos] = useState(Array(5).fill(null));
  const refresh = () => {
    setSlotInfos(
      Array.from({ length: 5 }, (_, i) => {
        const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${i}`);
        return raw ? JSON.parse(raw) : null;
      })
    );
  };

  useEffect(() => {
    refresh();
  }, [saveMenuOpen]);

  if (!saveMenuOpen) return null;

  const generateSlot = (slotIndex) => {
    const parsed = slotInfos[slotIndex];
    const timeStamp = parsed
      ? `(${new Date(parsed.timestamp).toLocaleString()})`
      : "(leer)";

    return (
      <li key={slotIndex} className="saveMenu__listItem">
        <div className="saveMenu__title">
          <p>Slot {slotIndex + 1}</p>
          <p>{timeStamp}</p>
        </div>
        <div className="saveMenu__btns">
          <button
            onClick={() => {
              saveToSlot(slotIndex);
              refresh();
            }}
            disabled={!sector}
          >
            Speichern
          </button>
          <button onClick={() => loadFromSlot(slotIndex)} disabled={!parsed}>
            Laden
          </button>
          <button
            onClick={() => {
              clearSlot(slotIndex);
              refresh();
            }}
            disabled={!parsed}
          >
            Löschen
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className="saveMenu">
      <h3>Laden und Speichern</h3>
      <ul className="saveMenu__list">
        {Array.from({ length: 5 }, (_, i) => generateSlot(i))}
      </ul>
    </div>
  );
}
