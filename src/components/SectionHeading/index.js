import React from "react";
import { StyledSectionHeading } from "./StyledSectionHeading";

function SectionHeading({ headingText = "" }) {
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
            top: "-7px",
            left: "50px",
          }}
        >
          {headingText}
        </p>
      </div>
    </StyledSectionHeading>
  );
}

export default SectionHeading;
