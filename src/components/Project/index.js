import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { StyledProject } from "./StyledProject";

function Project() {
  const [currentProject, setCurrentProject] = useState(0);

  let projectArr = [
    {
      desktopImg: "/images/project-preview/cheesyslice-desktop.svg",
      tabletImg: "/images/project-preview/cheesyslice-tablet.svg",
      mobileImg: "/images/project-preview/cheesyslice-mobile.svg",
      descImg: "/images/project-preview/cheesyslice-desc.svg",
      live: "https://cheesyslice.netlify.app/",
      github: "https://github.com/eyekavya/PizzaApp-React",
    },
    {
      desktopImg: "/images/project-preview/shinchan-desktop.svg",
      tabletImg: "/images/project-preview/shinchan-tablet.svg",
      mobileImg: "/images/project-preview/shinchan-mobile.svg",
      descImg: "/images/project-preview/shinchan-desc.svg",
      live: "https://kavya-shinchan.netlify.app/",
      github: "https://github.com/eyekavya/Shinchan-React",
    },
    {
      desktopImg: "/images/project-preview/forecastify-desktop.svg",
      tabletImg: "/images/project-preview/forecastify-tablet.svg",
      mobileImg: "/images/project-preview/forecastify-mobile.svg",
      descImg: "/images/project-preview/forecastify-desc.svg",
      live: "https://forecastify.netlify.app/",
      github: "https://github.com/eyekavya/WeatherApp-React",
    },
  ];
  return (
    <StyledProject id="projects">
      <div className="project wrapper">
        <SectionHeading headingText={"Projects"} />
        <div className="flex-row">
          <div
            className="btn btn-prev"
            onClick={() =>
              currentProject === 0
                ? setCurrentProject(2)
                : setCurrentProject(currentProject - 1)
            }
          ></div>
          <div className="screen-container">
            <div className="desktop">
              <img
                src={projectArr[currentProject].desktopImg}
                alt="Project preview"
              />
            </div>
            <div className="desktop-hover screen-hover">
              <img
                src={projectArr[currentProject].descImg}
                alt="Project description"
              />
            </div>

            <div className="tablet">
              <img
                src={projectArr[currentProject].tabletImg}
                alt="Project preview"
              />
            </div>
            <div className="tablet-hover screen-hover">
              <a
                href={projectArr[currentProject].live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/project-preview/host-tablet.svg"
                  alt="Live project link"
                />
              </a>
            </div>

            <div className="mobile">
              <img
                src={projectArr[currentProject].mobileImg}
                alt="Project preview"
              />
            </div>
            <div className="mobile-hover screen-hover">
              <a
                href={projectArr[currentProject].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/project-preview/github-mobile.svg"
                  alt="Project GitHub Repository link"
                />
              </a>
            </div>
          </div>
          <div
            className="btn btn-next"
            onClick={() =>
              currentProject < projectArr.length - 1
                ? setCurrentProject(currentProject + 1)
                : setCurrentProject(0)
            }
          ></div>
        </div>
      </div>
    </StyledProject>
  );
}

export default Project;
