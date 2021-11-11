import { useState, useRef } from "react";
import Diagram from "react-canvas-draw";
import axios from "axios"
function PaintBroad() {
  const canvasRef = useRef(null);
  function clear() {
    canvasRef.current.clear();
  }
  function undo() {
    canvasRef.current.undo();
  }
  function eraseAll() {
    canvasRef.current.eraseAll();
  }
  function getSaveData(){
    console.log(canvasRef.current.getDataURL("png", null, "white"));
  }
  return (
    <div>
      <div className="flex justify-between">
        <button
          className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
          onClick={undo}
        >
          Undo
        </button>
        <button
          className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
          onClick={eraseAll}
        >
          eraseAll
        </button>
        <button
          className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
          onClick={getSaveData}
        >
          getSaveData
        </button>
      </div>
      <div className="flex justify-between">
        <Diagram brushColor="pink" ref={canvasRef} />
      </div>
    </div>
  );
}

export default PaintBroad;
