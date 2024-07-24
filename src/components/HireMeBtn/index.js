import React from "react";
import { StyledHireMeBtn } from "./StyledHireMeBtn";

function HireMeBtn() {
  return (
    <StyledHireMeBtn>
      <button
        className="hireme"
        onClick={(e) => {
          window.location.href = "mailto:eyekavya@outlook.com";
        }}
      >
        Hire Me
      </button>
    </StyledHireMeBtn>
  );
}

export default HireMeBtn;
