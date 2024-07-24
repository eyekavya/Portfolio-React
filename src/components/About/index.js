import React from "react";
import { StyledAbout } from "./StyledAbout";
import CustomRoughNotation from "../CustomRoughNotation";
import { RoughNotationGroup } from "react-rough-notation";
import HireMeBtn from "../HireMeBtn";

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
              With more than 3 years of experience, I bring
              <CustomRoughNotation
                text=" creativity "
                type="circle"
                color="#F9D34C"
                order={3}
              />
              to life in the world of code and pixels. I've worked extensively
              in the BFSI sector.
            </RoughNotationGroup>
          </p>
          <p>
            Currently, a Frontend Developer at{" "}
            <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
              <img src="/images/tcs-logo.svg" alt="TCS Logo" />
            </a>
          </p>
          <HireMeBtn />
        </div>
        <div className="photo-container">
          <img src="/images/kavya/me-blob-strokes-final.svg" alt="My Snap" />
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
