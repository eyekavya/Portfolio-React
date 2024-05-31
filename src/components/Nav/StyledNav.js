import styled from "styled-components";

export const StyledNav = styled.section`
  max-height: 80px;
  width: 100%;
  /* position: fixed; */
  left: 0;
  right: 0;

  .nav-container {
    margin: 1rem 0;
    justify-content: space-between;
  }
  .logo-container {
    display: flex;
    width: 3rem;
    position: relative;

    div {
      cursor: pointer;
    }

    img {
      width: 3rem;
    }
  }

  .smiley-green,
  .smiley-yellow {
    position: absolute;
    display: none;
  }

  .smiley-green {
    left: -3.5rem;
  }

  .smiley-yellow {
    left: 3.5rem;
  }

  .logo-container:hover {
    .smiley-green,
    .smiley-yellow {
      display: block;
    }
  }

  .nav-items {
    gap: 4rem;

    div {
      cursor: pointer;
    }

    p {
      color: #8ad2ff;
      font-size: 16px;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
    }
  }
`;
