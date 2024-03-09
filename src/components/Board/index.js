import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ToolBox = () => {
  const canvasRef = useRef();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color } = useSelector((state) => state.toolbox[activeMenuItem]);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  //   console.log(color, size);
  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default ToolBox;
