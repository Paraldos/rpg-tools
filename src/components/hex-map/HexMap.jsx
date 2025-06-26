// src/HexMap.jsx
import React from "react";

function Hex({ q, r, size }) {
  const width = Math.sqrt(3) * size;
  const height = 2 * size;
  const x = width * (q + r / 2);
  const y = (3 / 2) * size * r;

  const points = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    return `${px},${py}`;
  });

  return (
    <polygon
      points={points.join(" ")}
      stroke="#333"
      fill="#ddd"
      strokeWidth="1"
    />
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
