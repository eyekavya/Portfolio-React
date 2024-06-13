import React from "react";
import parse from "html-react-parser";
import { StyledSectionHeading } from "./StyledSectionHeading";

function SectionHeading({ headingText = "", top = "5px" }) {
  return (
    <StyledSectionHeading headingText={headingText}>
      <div className="heading-container">
        <div className="heading"></div>
        <div
          className="heading"
          style={{
            position: "absolute",
            top: "28px",
          }}
        ></div>
        <div
          className="heading"
          style={{
            position: "absolute",
            top: "56px",
          }}
        ></div>

        <p
          className="heading-text"
          style={{
            position: "absolute",
            top: top,
            left: "50px",
          }}
        >
          {parse(headingText)}
        </p>
      </div>
    </StyledSectionHeading>
  );
}

export default SectionHeading;
