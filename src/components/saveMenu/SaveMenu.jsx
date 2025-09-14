import "./saveMenu.css";
import { useSectorStore } from "../../utils/store";
import {
  STORAGE_KEY_PREFIX,
  saveToSlot,
  loadFromSlot,
  clearSlot,
} from "../../utils/storageHelper";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { SvgX, SvgCheck } from "../svgs/Svgs";

export default function SaveMenu() {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "SaveMenu") return null;
  return <SaveMenuInner />;
}

function SaveMenuInner() {
  const sector = useSectorStore((s) => s.sector);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);
  const [slotInfos, setSlotInfos] = useState(Array(5).fill(null));
  const [slotToDelete, setSlotToDelete] = useState(null);

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

  const handleConfirmDelete = () => {
    if (slotToDelete == null) return;
    clearSlot(slotToDelete);
    setSlotToDelete(null);
    refresh();
  };

  const modal = (
    <Modal open={slotToDelete !== null} onClose={() => setSlotToDelete(null)}>
      <p>Sicher dass du diesen Speicherstand löschen willst?</p>
      <div className="saveMenu__modalBtns">
        <button className="symbolBtn" onClick={handleConfirmDelete}>
          <SvgCheck />
        </button>
        <button className="symbolBtn" onClick={() => setSlotToDelete(null)}>
          <SvgX />
        </button>
      </div>
    </Modal>
  );

  const generateSlot = (slotIndex) => {
    const parsed = slotInfos[slotIndex];
    const timeStamp = parsed
      ? `(${new Date(parsed.timestamp).toLocaleString()})`
      : "(leer)";

    const btnSpeichern = (
      <button
        onClick={() => {
          saveToSlot(slotIndex);
          refresh();
        }}
        disabled={!sector}
      >
        Speichern
      </button>
    );

    const btnLaden = (
      <button onClick={() => loadFromSlot(slotIndex)} disabled={!parsed}>
        Laden
      </button>
    );

    const btnDelete = (
      <button onClick={() => setSlotToDelete(slotIndex)} disabled={!parsed}>
        Löschen
      </button>
    );

    return (
      <li key={slotIndex} className="saveMenu__listItem">
        <div className="saveMenu__title">
          <p>Slot {slotIndex + 1}</p>
          <p>{timeStamp}</p>
        </div>
        <div className="saveMenu__btns">
          {btnSpeichern}
          {btnLaden}
          {btnDelete}
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
      {modal}
    </div>
  );
}
