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
import { useSectorStore } from "../../utils/store";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import FieldInfoWorldBtn from "./FieldInfoWorld";
import { reorderWorlds } from "../../utils/fieldHelper";

export default function FieldInfoListOfWorlds() {
  const sector = useSectorStore((s) => s.sector);
  const selectedFieldIndex = useSectorStore((s) => s.selectedFieldIndex);
  const selectedField = sector.fields[selectedFieldIndex];
  const worlds = selectedField.worlds;
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    })
  );

  if (selectedField.type !== "Stern") return;

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const oldIndex = worlds.findIndex((w) => w?.id === active.id);
    const newIndex = worlds.findIndex((w) => w?.id === over.id);
    if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return;

    const reordered = arrayMove(worlds, oldIndex, newIndex);
    reorderWorlds(reordered);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={worlds.map((w) => w.id)}
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
  );
}
