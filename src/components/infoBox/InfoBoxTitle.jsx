import { SvgText } from "../svgs/Svgs";

export default function InfoBoxTitle({ title, onChangeHandler }) {
  return (
    <h2 className="infoBox__title">
      <input
        type="text"
        value={title}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <SvgText />
    </h2>
  );
}
