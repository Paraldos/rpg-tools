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

export default function HexMap({ rows = 10, cols = 10, size = 30 }) {
  const hexes = [];

  for (let r = 0; r < rows; r++) {
    for (let q = 0; q < cols; q++) {
      hexes.push(<Hex key={`${q},${r}`} q={q} r={r} size={size} />);
    }
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 1000">
      {hexes}
    </svg>
  );
}
