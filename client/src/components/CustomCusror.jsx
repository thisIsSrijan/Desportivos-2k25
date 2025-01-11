import React, { useEffect, useState } from "react";
import "./CustomCursor.css"; // Include your CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        clicked ? "clicked" : ""
      } text-xs  flex items-center justify-center`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      Click
    </div>
  );
};

export default CustomCursor;
