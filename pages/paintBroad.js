import { useState, useRef } from "react";
import Diagram from "react-canvas-draw";
import axios from "axios"
function PaintBroad() {

  const [fileUrl, setFileUrl] = useState();
  
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
  function getSaveData() {
    const url = canvasRef.current.getDataURL("png", null, "white");
    console.log(url);
    setFileUrl(url);
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
      </div>
      <div className="flex justify-between">
        <Diagram brushColor="pink" ref={canvasRef} />
      </div>
      <div className="flex justify-between">
        <button
          className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
          onClick={getSaveData}
        >
          save Image
        </button>
        {
          fileUrl && (
            <a className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg" download href={fileUrl}>Download image</a>
          )
        }
      </div>
    </div>
  );
}

export default PaintBroad;
