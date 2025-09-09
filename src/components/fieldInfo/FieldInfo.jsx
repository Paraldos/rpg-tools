import "./fieldInfo.css";
import FieldInfoWorldBtn from "./FieldInfoWorld";
import { useSectorStore } from "../../utils/store";
import FieldInfoTitle from "./FieldInfoTitle";
import FieldInfoAddWorld from "./FieldInfoAddWorld";
import FieldInfoChangeFieldType from "./FieldInfoChangeFieldType";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function FieldInfo() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);
  const saveMenuOpen = useSectorStore((s) => s.saveMenuOpen);
  const setSector = useSectorStore((s) => s.setSector);

  if (!selectedFieldIndex || saveMenuOpen) return null;

  const selectedField = sector.fields[selectedFieldIndex];

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active || !over || active.id === over.id) return;

    const oldIndex = Number(active.id);
    const newIndex = Number(over.id);

    const sectorClone = structuredClone(sector);
    const worlds = sectorClone.fields[selectedFieldIndex].worlds;

    const [movedWorld] = worlds.splice(oldIndex, 1);
    worlds.splice(newIndex, 0, movedWorld);

    setSector(sectorClone);
  };

  let content = null;
  if (selectedField.type === "Schwarzes Loch") content = <FieldInfoTitle />;
  if (selectedField.type === "Stern") {
    content = (
      <>
        <FieldInfoTitle />
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={selectedField.worlds.map((_, index) => String(index))}
            strategy={verticalListSortingStrategy}
          >
            <ul className="fieldInfo__listOfWorlds">
              {selectedField.worlds.map((_world, index) => (
                <FieldInfoWorldBtn
                  key={`world-${selectedFieldIndex}-${index}`}
                  worldIndex={index}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
        <FieldInfoAddWorld />
      </>
    );
  }

  return (
    <div className="fieldInfo">
      <p className="fieldInfo__baseInfo smallText">
        Feld: {selectedField.index + 1}, Typ: {selectedField.type}
      </p>
      <div className="fieldInfo__content">{content}</div>
      <FieldInfoChangeFieldType />
    </div>
  );
}
