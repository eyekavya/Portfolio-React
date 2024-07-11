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

  .desktop-img {
    margin: 0 auto;
    img {
      height: 40rem;
    }
  }

  .tablet-img,
  .mobile-img {
    position: absolute;
  }

  .tablet-img {
    bottom: -20rem;
    rotate: -2deg;
    left: 1.5rem;
    img {
      height: 28rem;
    }
  }

  .mobile-img {
    bottom: -20rem;
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
