import React from "react";
import parse from "html-react-parser";
import { StyledSkill } from "./StyledSkill";
import SectionHeading from "../SectionHeading";

function Skill() {
  return (
    <StyledSkill>
      <div className="about wrapper">
        <SectionHeading headingText={parse(`Yes, I do <br /> all this! `)} />
      </div>
    </StyledSkill>
  );
}

export default Skill;
