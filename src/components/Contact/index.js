import React from "react";
import { StyledContact } from "./StyledContact";
import SectionHeading from "../SectionHeading";
import HireMeBtn from "../HireMeBtn";

function Contact() {
  return (
    <StyledContact id="contact">
      <div className="contact wrapper">
        <SectionHeading
          headingText="Contact <br /> me"
          top="-6px"
        ></SectionHeading>
        <HireMeBtn />
      </div>
    </StyledContact>
  );
}

export default Contact;
