import React from "react";
import parse from "html-react-parser";
import { StyledSkill } from "./StyledSkill";
import SectionHeading from "../SectionHeading";

function Skill() {
  return (
    <StyledSkill>
      <div className="skill wrapper">
        <SectionHeading headingText={parse(`Yes, I do <br /> all this! `)} />
        <div className="skill-container">
          <div className="skill-main  flex-row">
            <img src="/images/skill-logo/react-logo.svg" alt="ReactJS logo" />
            <div className="skill-desc">
              <h2>ReactJS</h2>
              <p>
                From webpages to SPAs to android apps, ReactJS got it all. The
                declarative component-based approach makes debugging a child's
                play.
              </p>
              <div className="skill-det">
                <p>For: Frontend development</p>
                <div className="skill-level flex-row">
                  <p>Level:</p>
                  <div className="dot-group flex-row">
                    <div className="dot dot-blue"></div>
                    <div className="dot dot-blue"></div>
                    <div className="dot dot-blue"></div>
                    <div className="dot dot-blue"></div>
                    <div className="dot dot-grey"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-group flex-row">
            <img src="images/skill-logo/react-logo.svg" alt="" />
            <img src="images/skill-logo/redux-logo.svg" alt="" />
            <img src="images/skill-logo/htmlcssjs-logo.svg" alt="" />
            <img src="images/skill-logo/sass-logo.svg" alt="" />
            <img src="images/skill-logo/mui-logo.svg" alt="" />
            <img src="images/skill-logo/antd-logo.svg" alt="" />
            <img src="images/skill-logo/bootstrap-logo.svg" alt="" />
            <img src="images/skill-logo/git-logo.svg" alt="" />
            <img src="images/skill-logo/figma-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </StyledSkill>
  );
}

export default Skill;
