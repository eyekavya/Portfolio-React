import React from "react";
import { StyledNav } from "./StyledNav";

function Nav() {
  return (
    <StyledNav>
      <div className="nav-container flex-row">
        <div className="logo-container">
          <div className="smiley-green">
            <img src="/images/logo-smiley-green.svg" alt="Green Smiley" />
          </div>
          {/* -- */}
          <div className="smiley-beige">
            <img src="/images/logo-smiley-beige.svg" alt="Beige Smiley" />
          </div>

          {/* -- */}
          <div className="smiley-yellow">
            <img src="/images/logo-smiley-yellow.svg" alt="Yellow Smiley" />
          </div>
        </div>
        <div className="nav-items flex-row">
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Skills</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </StyledNav>
  );
}

export default Nav;
