import React from "react";
import SectionHeading from "../SectionHeading";
import { StyledProject } from "./StyledProject";

function Project() {
  return (
    <StyledProject>
      <div className="project wrapper">
        <SectionHeading headingText={"Projects"} />
        <div className="flex-row">
          <div className="btn btn-prev"></div>
          <div className="project-container">
            <img
              src="/images/project-preview/cheesy-slice.svg"
              alt="Projects Preview"
            />
          </div>
          <div className="btn btn-next"></div>
        </div>
      </div>
    </StyledProject>
  );
}

export default Project;
