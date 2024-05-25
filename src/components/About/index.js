import React from "react";
import { StyledAbout } from "./StyledAbout";

function About() {
  return (
    <StyledAbout>
      <div className="about flex-row wrapper">
        <div className="desc-container">
          <p>
            I am a creative Front-end Web Developer & Web Designer based in
            India, fueled by ideas and coffee. In the world of code and pixels,
            I bring creativity to life.
          </p>
          <p>
            Currently, a Frontend Developer at{" "}
            <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
              <img src="/images/tcs-logo.svg" alt="TCS Logo" />
            </a>
          </p>
        </div>
        <div className="photo-container">
          <img src="/images/me-blob-strokes-final.svg" alt="My Snap" />
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
