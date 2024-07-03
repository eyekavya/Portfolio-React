import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { StyledProject } from "./StyledProject";

function Project() {
  const [projectIndex, setProjectIndex] = useState(0);

  let projectArray = [
    "/images/project-preview/cheesy-slice.svg",
    "/images/project-preview/shinchan.svg",
    "/images/project-preview/forecastify.svg",
  ];
  return (
    <StyledProject id="projects">
      <div className="project wrapper">
        <SectionHeading headingText={"Projects"} />
        <div className="flex-row">
          <div
            className="btn btn-prev"
            onClick={() =>
              projectIndex === 0
                ? setProjectIndex(2)
                : setProjectIndex(projectIndex - 1)
            }
          ></div>
          <div className="project-container">
            <img src={projectArray[projectIndex]} alt="Project Preview" />
          </div>
          <div
            className="btn btn-next"
            onClick={() =>
              projectIndex < projectArray.length - 1
                ? setProjectIndex(projectIndex + 1)
                : setProjectIndex(0)
            }
          ></div>
        </div>
      </div>
    </StyledProject>
  );
}

export default Project;
