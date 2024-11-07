"use client";

import React from "react";

function useMousePosition() {
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });

  const updateMouse = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMouse);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return position;
}

export default useMousePosition;
