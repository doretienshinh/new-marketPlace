import { useState, useRef, useCallback } from "react";
import Diagram from "react-canvas-draw";
import axios from "axios"
import ColorPicker from "./colorPicker";
import Tools from "./tools.js";
function PaintBroad() {

  const [brushColor, setBrusholor] = useState("#444");
  const [lastPenColor, setLastPenColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(30);
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
  const handleColorChange = useCallback((color) => {
    const {
      rgb: { r, g, b, a }
    } = color;
    setBrusholor(`rgba(${r}, ${g}, ${b},${a})`);
    setLastPenColor(`rgba(${r}, ${g}, ${b},${a})`);
  }, []);
  const toolChange = useCallback(
    (tool, size) => {
      if (tool === "eraser") {
        setBrusholor("#ffffff");
      }
      if (tool === "pen") {
        setBrusholor(lastPenColor);
      }
    },
    [lastPenColor]
  );
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
      <div className="flex justify-between border mt-4 p-4 shadow">
        <ColorPicker
          brushColor={brushColor}
          handleColorChange={handleColorChange}
        />
        <Diagram className="border shadow" brushColor={brushColor} ref={canvasRef} brushRadius={brushRadius}/>
        <Tools
          setBrushRadius={setBrushRadius}
          handleToolChange={toolChange}
          canvasRef={canvasRef}
          brushRadius={brushRadius}
        />
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
