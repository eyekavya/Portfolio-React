import React from "react";

import { RoughNotation } from "react-rough-notation";

function CustomRoughNotation({ text, showAnnotation, type = "underline" }) {
  return (
    <>
      <div>
        <RoughNotation
          type={type}
          show={showAnnotation}
          animationDuration={500}
          strokeWidth={3}
        >
          {text}
        </RoughNotation>
      </div>
    </>
  );
}

export default CustomRoughNotation;
