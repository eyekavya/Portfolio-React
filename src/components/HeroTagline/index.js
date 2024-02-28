import React, { useState } from "react";
import { StyledHeroTagline } from "./StyledHeroTagline";

function HeroTagline() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "a frontend developer",
    "a UI/UX designer",
    "with loads of ideas",
    "and I love coffee",
    "I also love Taylor Swift music",
    "I really like reading books",
  ];

  const changeTagline = () => {
    let newIndex = taglineIndex === taglines.length - 1 ? 0 : taglineIndex + 1;
    setTaglineIndex(newIndex);
  };

  return (
    <StyledHeroTagline>
      <div
        className="tagline"
        onClick={changeTagline}
        onMouseEnter={changeTagline}
        onMouseLeave={changeTagline}
      >
        {taglines[taglineIndex]}
      </div>

      {/* Refresh Button */}
      {/* <img
        src="/icons/refresh.svg"
        alt="Refresh Button"
        className="refresh-btn"
        onClick={() => {
          let newIndex =
            taglineIndex === taglines.length - 1 ? 0 : taglineIndex + 1;
          setTaglineIndex(newIndex);
        }}
      /> */}
    </StyledHeroTagline>
  );
}

export default HeroTagline;
