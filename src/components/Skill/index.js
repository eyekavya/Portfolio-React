import React, { useState } from "react";
import { StyledSkill } from "./StyledSkill";
import SectionHeading from "../SectionHeading";

function Skill() {
  const [skillIndex, setSkillIndex] = useState(0);
  let logoArray = [
    "react-logo.svg",
    "redux-logo.svg",
    "htmlcssjs-logo.svg",
    "sass-logo.svg",
    "mui-logo.svg",
    "antd-logo.svg",
    "bootstrap-logo.svg",
    "git-logo.svg",
    "figma-logo.svg",
  ];

  let skillArray = [
    {
      title: "ReactJS",
      desc: `From webpages to SPAs to android apps, ReactJS got it all. The
  declarative component-based approach makes debugging a child's play.`,
      for: "Frontend development",
      classNames: [
        "dot-react",
        "dot-react",
        "dot-react",
        "dot-react",
        "dot-grey",
      ],
    },
    {
      title: "ReduxJS",
      desc: `Features like state persistence, state predictability, time-travel debugging and more, makes ReduxJS a great companion for ReactJS.`,
      for: "State management",
      classNames: [
        "dot-redux",
        "dot-redux",
        "dot-redux",
        "dot-redux",
        "dot-grey",
      ],
    },
    {
      title: "HTML/CSS/JS",
      desc: `The base foundation of majority web-frameworks, this trio rules the client side of web applications, with or without frameworks.`,
      for: "Frontend development",
      classNames: ["dot-js", "dot-js", "dot-js", "dot-js", "dot-js"],
    },
    {
      title: "Sass",
      desc: `A dynamic CSS extension that simplifies and enhances stylesheets for efficient and maintainable web development.`,
      for: "UI Design",
      classNames: ["dot-sass", "dot-sass", "dot-sass", "dot-sass", "dot-grey"],
    },
    {
      title: "Material UI",
      desc: `React components with Google's Material Design, providing a sleek and consistent UI for faster and easier web development.`,
      for: "UI Design",
      classNames: ["dot-mui", "dot-mui", "dot-mui", "dot-mui", "dot-grey"],
    },
    {
      title: "Ant Design",
      desc: `A UI design language and React UI library that contains easy-to-use React components that are useful for building interactive user interfaces.`,
      for: "UI Design",
      classNames: ["dot-antd", "dot-antd", "dot-antd", "dot-antd", "dot-grey"],
    },
    {
      title: "Bootstrap",
      desc: `A front-end framework, provides a collection of HTML, CSS, and JS components and tools that enable developers to build responsive websites with ease.`,
      for: "UI Design",
      classNames: [
        "dot-bootstrap",
        "dot-bootstrap",
        "dot-bootstrap",
        "dot-bootstrap",
        "dot-bootstrap-grey",
      ],
    },
    {
      title: "Git",
      desc: `A free and open-source version control system used to track changes in the source code, enabling multiple developers to work together.`,
      for: "Version Control",
      classNames: ["dot-git", "dot-git", "dot-git", "dot-git", "dot-git-grey"],
    },
    {
      title: "Figma",
      desc: `A cloud based UI/UX design tool with code-generation and interactive prototyping capabilities that’s used to design apps, screens and vector illustrations.`,
      for: "Prototypes",
      classNames: [
        "dot-figma",
        "dot-figma",
        "dot-figma",
        "dot-figma",
        "dot-figma-grey",
      ],
    },
  ];
  return (
    <StyledSkill>
      <div className="skill wrapper">
        <SectionHeading headingText="Yes, I do <br /> all this! " top="-7px" />
        <div className="skill-container">
          <div className="skill-main  flex-row">
            <img
              src={`/images/skill-logo/${logoArray[skillIndex]}`}
              alt="ReactJS logo"
            />
            <div className="skill-desc">
              <h2>{skillArray[skillIndex].title}</h2>
              <p className="skillDesc">{skillArray[skillIndex].desc}</p>
              <div className="skill-det">
                <p>For: {skillArray[skillIndex].for}</p>
                <div className="skill-level flex-row">
                  <p>Level:</p>
                  <div className="dot-group flex-row">
                    {skillArray[skillIndex].classNames.map((e) => {
                      return <div className={`dot ${e}`}></div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logo-group flex-row">
            {logoArray.map((e, i) => {
              return (
                <img
                  src={`images/skill-logo/${e}`}
                  alt=""
                  onClick={() => {
                    setSkillIndex(i);
                  }}
                  className={i === skillIndex ? "logo-active" : ""}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyledSkill>
  );
}

export default Skill;
