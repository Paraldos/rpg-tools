import { useSectorStore } from "./store";

export const STORAGE_KEY_PREFIX = "rpg-tools__sector__";
export const getSlotKey = (i: number) => `${STORAGE_KEY_PREFIX}${i}`;

export const saveToSlot = (slotIndex: number) => {
  const sector = useSectorStore.getState().sector;
  if (!sector) return;
  const payload = {
    timestamp: Date.now(),
    sector,
  };
  localStorage.setItem(getSlotKey(slotIndex), JSON.stringify(payload));
};

export const loadFromSlot = (slotIndex: number) => {
  const raw = localStorage.getItem(getSlotKey(slotIndex));
  if (!raw) return;
  const parsed = JSON.parse(raw);
  useSectorStore.setState({
    sector: parsed.sector,
    selectedFieldIndex: null,
    selectedWorldIndex: null,
    oldSelectedInfoMenu: null,
  });
};

export const clearSlot = (slotIndex: number) => {
  localStorage.removeItem(getSlotKey(slotIndex));
};
