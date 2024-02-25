import React from "react";
import { StyledHero } from "./StyledHero";

function Hero() {
  return (
    <StyledHero className="wrapper">
      <div className="hero-box-parent">
        <div>
          <div className="hello hero-box-general">Hello there</div>
          <div className="iam hero-box-general">I am</div>
        </div>
        <div>
          <div className="hero-smiley">
            <img src="/images/hero-smiley.svg" alt="Beige Smiley" />
          </div>
          <div className="kavya hero-box-general">Kavya</div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
