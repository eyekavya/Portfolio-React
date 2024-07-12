import styled from "styled-components";

export const StyledProject = styled.section`
  .project {
    height: 100vh;
    margin-top: 20rem;
  }

  .flex-row {
    justify-content: space-between;
  }

  .screen-container {
    position: relative;
    margin: 0 auto;
  }

  .desktop,
  .desktop-hover {
    margin: 0 auto;
    img {
      height: 40rem;
    }
  }

  .screen-hover {
    position: absolute;
    bottom: 0rem;
    opacity: 0;
  }

  .screen-hover:hover {
    opacity: 1;
  }

  .tablet,
  .mobile,
  .tablet-hover,
  .mobile-hover {
    position: absolute;
    bottom: -20rem;
  }

  .tablet,
  .tablet-hover {
    rotate: -2deg;
    left: 1.5rem;
    img {
      height: 28rem;
    }
  }

  .mobile,
  .mobile-hover {
    left: 46rem;
    rotate: 5deg;
    img {
      height: 34rem;
    }
  }

  .btn {
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    cursor: pointer;
    opacity: 0.8;
  }

  .btn:hover {
    opacity: 1;
  }

  .btn-prev {
    border-right: 50px solid #ababab;
  }

  .btn-next {
    border-left: 50px solid #ababab;
  }
`;
