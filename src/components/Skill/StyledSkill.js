import styled from "styled-components";

export const StyledSkill = styled.section`
  .skill {
    height: 100vh;
  }

  .skill-main {
    gap: 10rem;
    padding: 10rem;
  }
  .skill-desc {
    font-family: "Work Sans", sans-serif;
    color: #fdf6ee;
    h2 {
      font-weight: 600;
      font-size: 5.7rem;
      margin: 0;
    }
    p {
      font-size: 2.2rem;
      text-align: justify;
      font-weight: 400;
      line-height: 1.4;
    }
    .skillDesc {
      min-height: 141px;
    }

    .skill-det {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    }

    .skill-level {
      gap: 2rem;
    }

    .dot-group {
      gap: 1rem;
    }

    .dot {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    }

    .dot-blue {
      background-color: #00d8ff;
    }

    .dot-grey {
      background-color: #ababab;
    }

    .dot-blue-grey {
      background-image: linear-gradient(
        90deg,
        hsl(189deg 100% 50%) 1%,
        hsl(191deg 96% 58%) 33%,
        hsl(191deg 92% 61%) 41%,
        hsl(192deg 87% 62%) 46%,
        hsl(192deg 82% 64%) 48%,
        hsl(193deg 77% 65%) 50%,
        hsl(193deg 72% 66%) 51%,
        hsl(193deg 67% 66%) 51%,
        hsl(193deg 62% 67%) 51%,
        hsl(194deg 56% 67%) 51%,
        hsl(194deg 51% 67%) 50%,
        hsl(194deg 46% 68%) 50%,
        hsl(194deg 41% 68%) 49%,
        hsl(194deg 36% 68%) 49%,
        hsl(194deg 31% 68%) 49%,
        hsl(195deg 26% 68%) 49%,
        hsl(195deg 22% 68%) 50%,
        hsl(195deg 17% 68%) 52%,
        hsl(195deg 13% 68%) 54%,
        hsl(195deg 8% 67%) 59%,
        hsl(195deg 4% 67%) 67%,
        hsl(0deg 0% 67%) 99%
      );
    }
  }

  .logo-group {
    justify-content: space-between;
  }
  .logo-group img {
    width: 8rem;
    cursor: pointer;
  }
`;
