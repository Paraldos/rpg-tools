import React from "react";

export default function HexField({ size = 30 }) {
  const width = Math.sqrt(3) * size;
  const height = 2 * size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="-12 -12 24 24" // Make sure this matches your actual drawing
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000"
        d="M12 21.7a.75.75 0 0 1-.38-.1l-7.75-4.48a.74.74 0 0 1-.37-.65V7.53a.74.74 0 0 1 .37-.65l7.75-4.48a.77.77 0 0 1 .75 0l7.75 4.48a.73.73 0 0 1 .38.65v8.94a.73.73 0 0 1-.38.65l-7.75 4.48a.69.69 0 0 1-.37.1ZM5 16l7 4 7-4V8l-7-4-7 4v8Z"
      />
    </svg>
  );
}
