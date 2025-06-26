import React from "react";
import HexMap from "./components/hex_maps/HexMap";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <HexMap rows={10} cols={10} size={30} />
    </div>
  );
}
