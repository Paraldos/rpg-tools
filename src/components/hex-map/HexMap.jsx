import React from "react";
import Hexfield from "../svgs/HexField";

function Hex({ q, r, size }) {
  const width = Math.sqrt(3) * size;
  const height = 2 * size;
  const x = width * (q + r / 2);
  const y = (3 / 2) * size * r;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <Hexfield size={size} />
    </g>
  );
}

export default function HexMap({ radius = 5, size = 30 }) {
  const hexes = [];

  for (let q = -radius; q <= radius; q++) {
    const r1 = Math.max(-radius, -q - radius);
    const r2 = Math.min(radius, -q + radius);
    for (let r = r1; r <= r2; r++) {
      hexes.push(<Hex key={`${q},${r}`} q={q} r={r} size={size} />);
    }
  }

  const mapWidth = Math.sqrt(3) * size * (2 * radius + 1);
  const mapHeight = 1.5 * size * (2 * radius + 1);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`-${mapWidth / 2} -${mapHeight / 2} ${mapWidth} ${mapHeight}`}
    >
      {hexes}
    </svg>
  );
}
