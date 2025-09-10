import "./fieldInfo.css";
import FieldInfoWorldBtn from "./FieldInfoWorld";
import { useSectorStore } from "../../utils/store";
import FieldInfoTitle from "./FieldInfoTitle";
import FieldInfoAddWorld from "./FieldInfoAddWorld";
import FieldInfoChangeFieldType from "./FieldInfoChangeFieldType";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function FieldInfo() {
  const selectedInfoMenu = useSectorStore((s) => s.selectedInfoMenu);
  if (selectedInfoMenu !== "FieldInfo") return null;
  return <FieldInfoInner />;
}

function FieldInfoInner() {
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const sector = useSectorStore((s) => s.sector);
  const setSector = useSectorStore((s) => s.setSector);
  const selectedField = sector.fields[selectedFieldIndex];
  const worlds = sector.fields[selectedFieldIndex].worlds;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    })
  );

  const handleDragEnd = ({ active, over }) => {
    const sectorClone = structuredClone(sector);
    const field = sectorClone.fields[selectedFieldIndex];
    const oldIndex = field.worlds.findIndex((w) => w?.id === active.id);
    const newIndex = field.worlds.findIndex((w) => w?.id === over.id);
    field.worlds = arrayMove(field.worlds, oldIndex, newIndex);
    setSector(sectorClone);
  };

  let content = null;
  if (selectedField.type === "Schwarzes Loch") content = <FieldInfoTitle />;
  if (selectedField.type === "Stern") {
    content = (
      <>
        <FieldInfoTitle />
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={worlds.map((world) => world.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul className="fieldInfo__listOfWorlds">
              {worlds.map((world, index) => (
                <FieldInfoWorldBtn
                  key={world.id}
                  id={world.id}
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
