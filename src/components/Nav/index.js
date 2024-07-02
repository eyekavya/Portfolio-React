import React, { useState } from "react";
import { StyledNav } from "./StyledNav";
import CustomRoughNotation from "../CustomRoughNotation";

function Nav() {
  const [showAnnotation, setShowAnnotation] = useState({
    about: false,
    skills: false,
    projects: false,
    contacts: false,
    resume: false,
  });

  return (
    <StyledNav className="wrapper">
      <div className="nav-container flex-row">
        <div className="logo-container">
          <div className="smiley-green">
            <img
              src="/images/smiley/logo-smiley-green.svg"
              alt="Green Smiley"
            />
          </div>
          {/* -- */}
          <div className="smiley-beige">
            <img
              src="/images/smiley/logo-smiley-beige.svg"
              alt="Beige Smiley"
            />
          </div>

          {/* -- */}
          <div className="smiley-yellow">
            <img
              src="/images/smiley/logo-smiley-yellow.svg"
              alt="Yellow Smiley"
            />
          </div>
        </div>
        <div className="nav-items flex-row">
          <div>
            <p
              onMouseEnter={() => {
                setShowAnnotation({ ...showAnnotation, about: true });
              }}
              onMouseLeave={() => {
                setShowAnnotation({ ...showAnnotation, about: false });
              }}
            >
              <CustomRoughNotation
                text="About"
                showAnnotation={showAnnotation.about}
              />
            </p>
          </div>
          <div>
            <p
              onMouseEnter={() => {
                setShowAnnotation({ ...showAnnotation, skills: true });
              }}
              onMouseLeave={() => {
                setShowAnnotation({ ...showAnnotation, skills: false });
              }}
            >
              <CustomRoughNotation
                text="Skills"
                showAnnotation={showAnnotation.skills}
              />
            </p>
          </div>
          <div>
            <p
              onMouseEnter={() => {
                setShowAnnotation({ ...showAnnotation, projects: true });
              }}
              onMouseLeave={() => {
                setShowAnnotation({ ...showAnnotation, projects: false });
              }}
            >
              <CustomRoughNotation
                text="Projects"
                showAnnotation={showAnnotation.projects}
              />
            </p>
          </div>
          <div>
            <p
              onMouseEnter={() => {
                setShowAnnotation({ ...showAnnotation, contacts: true });
              }}
              onMouseLeave={() => {
                setShowAnnotation({ ...showAnnotation, contacts: false });
              }}
            >
              <CustomRoughNotation
                text="Contact"
                showAnnotation={showAnnotation.contacts}
              />
            </p>
          </div>
          <div>
            <p
              onMouseEnter={() => {
                setShowAnnotation({ ...showAnnotation, resume: true });
              }}
              onMouseLeave={() => {
                setShowAnnotation({ ...showAnnotation, resume: false });
              }}
            >
              <a
                href="https://drive.google.com/file/d/1gdE4s0oVWWYM9NNlpFcVjUncYVJaNGg5/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <CustomRoughNotation
                  text="Resume"
                  showAnnotation={showAnnotation.resume}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledNav>
  );
}

export default Nav;
