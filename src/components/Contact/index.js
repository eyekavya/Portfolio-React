import React, { useState } from "react";
import { StyledContact } from "./StyledContact";
import SectionHeading from "../SectionHeading";
import HireMeBtn from "../HireMeBtn";
import CustomRoughNotation from "../CustomRoughNotation";

function Contact() {
  const [showAnnotation, setShowAnnotation] = useState({
    linkedin: false,
    github: false,
    email: false,
    instagram: false,
  });

  return (
    <StyledContact id="contact">
      <div className="contact wrapper">
        <SectionHeading
          headingText="Contact <br /> me"
          top="-6px"
        ></SectionHeading>

        <div className="desc">
          <p>
            I love the creative process of generating new ideas, but I know when
            to be detail-oriented and quick in project development. I'm
            overflowing with passion to develop and design and a drive to learn
            and grow. I'm committed to constantly improving my skills.{" "}
          </p>
          <p>
            If you've a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div className="hireme-btn">
          <HireMeBtn />
        </div>
        <div className="line"></div>
        <div className="nav-items flex-row">
          <div>
            <a
              href="https://www.linkedin.com/in/eyekavya/"
              target="_blank"
              rel="noreferrer"
            >
              <p
                onMouseEnter={() => {
                  setShowAnnotation({ ...showAnnotation, linkedin: true });
                }}
                onMouseLeave={() => {
                  setShowAnnotation({ ...showAnnotation, linkedin: false });
                }}
              >
                <CustomRoughNotation
                  text="Linkedin"
                  color="#fdf6ee"
                  showAnnotation={showAnnotation.linkedin}
                />
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/eyekavya"
              target="_blank"
              rel="noreferrer"
            >
              <p
                onMouseEnter={() => {
                  setShowAnnotation({ ...showAnnotation, github: true });
                }}
                onMouseLeave={() => {
                  setShowAnnotation({ ...showAnnotation, github: false });
                }}
              >
                <CustomRoughNotation
                  text="GitHub"
                  color="#fdf6ee"
                  showAnnotation={showAnnotation.github}
                />
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/eyekavya/"
              target="_blank"
              rel="noreferrer"
            >
              <p
                onMouseEnter={() => {
                  setShowAnnotation({ ...showAnnotation, instagram: true });
                }}
                onMouseLeave={() => {
                  setShowAnnotation({ ...showAnnotation, instagram: false });
                }}
              >
                <CustomRoughNotation
                  text="Instagram"
                  color="#fdf6ee"
                  showAnnotation={showAnnotation.instagram}
                />
              </p>
            </a>
          </div>
          <div>
            <a
              href="mailto:eyekavya@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <p
                onMouseEnter={() => {
                  setShowAnnotation({ ...showAnnotation, email: true });
                }}
                onMouseLeave={() => {
                  setShowAnnotation({ ...showAnnotation, email: false });
                }}
              >
                <CustomRoughNotation
                  text="Email"
                  color="#fdf6ee"
                  showAnnotation={showAnnotation.email}
                />
              </p>
            </a>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
