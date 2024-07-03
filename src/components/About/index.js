import React from "react";
import { StyledAbout } from "./StyledAbout";
import CustomRoughNotation from "../CustomRoughNotation";
import { RoughNotationGroup } from "react-rough-notation";

function About() {
  return (
    <StyledAbout id="about">
      <div className="about flex-row wrapper">
        <div className="desc-container">
          <p>
            <RoughNotationGroup show={true}>
              I am a creative
              <CustomRoughNotation
                text=" Front-end Web Developer "
                color="#F9D34C"
                order={1}
                multiline={true}
              />
              &
              <CustomRoughNotation
                text=" Web Designer "
                color="#F9D34C"
                order={2}
                multiline={true}
              />
              based in India, fueled by ideas and coffee. In the world of code
              and pixels, I bring
              <CustomRoughNotation
                text=" creativity "
                type="circle"
                color="#F9D34C"
                order={3}
              />
              to life.
            </RoughNotationGroup>
          </p>
          <p>
            Currently, a Frontend Developer at{" "}
            <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
              <img src="/images/tcs-logo.svg" alt="TCS Logo" />
            </a>
          </p>
        </div>
        <div className="photo-container">
          <img src="/images/kavya/me-blob-strokes-final.svg" alt="My Snap" />
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
