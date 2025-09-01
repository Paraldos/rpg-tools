import "./controlls.css";
import { generateSector } from "../../../utils/generateSector";

export default function Controlls() {
  const handleNew = () => {
    const fields = generateSector();
    console.log(fields);
  };

  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={handleNew}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}
