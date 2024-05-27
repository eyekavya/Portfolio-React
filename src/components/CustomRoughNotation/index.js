import React from "react";

import { RoughNotation } from "react-rough-notation";

function CustomRoughNotation({
  type = "underline",
  showAnnotation = false,
  animationDuration = 700,
  strokeWidth = 3,
  animate = true,
  text = "",
  color = "#8ad2ff",
  iterations = 2,
  padding = 5,
  order = "1",
  brackets,
}) {
  return (
    <RoughNotation
      type={type}
      show={showAnnotation}
      animationDuration={animationDuration}
      strokeWidth={strokeWidth}
      animate={animate}
      color={color}
      iterations={iterations}
      padding={padding}
      order={order}
      brackets={brackets}
    >
      {text}
    </RoughNotation>
  );
}

export default CustomRoughNotation;
