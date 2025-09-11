import { useSectorStore } from "../../utils/store";

export const OptionsMenu = () => {
  const selectedInfo = useSectorStore((s) => s.selectedInfo);
  if (selectedInfo !== "OptionsMenu") return null;

  return (
    <div>
      <h1>Options Menu</h1>
    </div>
  );
};
