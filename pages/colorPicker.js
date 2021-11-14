import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ brushColor, handleColorChange }) => {
  return (
    <SketchPicker
      width="150px"
      color={brushColor}
      onChangeComplete={handleColorChange}
    />
  );
}
export default ColorPicker;
