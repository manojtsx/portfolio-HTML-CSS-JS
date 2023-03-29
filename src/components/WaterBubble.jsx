import React, { useState, useEffect } from "react";

const WaterBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
  }
  document.addEventListener("mousemove", handleMouseMove);

  return (
    <div
      className="water-bubble"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseMove={handleMouseMove}
    ></div>
  );
};

export default WaterBubble;
