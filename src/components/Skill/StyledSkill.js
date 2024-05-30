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
      line-height: 1.3;
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
  }

  .logo-group {
    justify-content: space-between;
  }
  .logo-group img {
    width: 8rem;
  }
`;
