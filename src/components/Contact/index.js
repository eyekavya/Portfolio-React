import React from "react";
import { StyledContact } from "./StyledContact";
import SectionHeading from "../SectionHeading";

function Contact() {
  return (
    <StyledContact id="contact">
      <div className="contact wrapper">
        <SectionHeading
          headingText="Contact <br /> me"
          top="-6px"
        ></SectionHeading>
      </div>
    </StyledContact>
  );
}

export default Contact;
