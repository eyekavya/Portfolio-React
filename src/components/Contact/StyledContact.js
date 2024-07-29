import styled from "styled-components";

export const StyledContact = styled.section`
  .contact {
    height: max-content;
    margin-top: 20rem;
    margin-bottom: 0;
  }

  /* .info {
    width: 50%;

    h3 {
      font-size: 4.6rem;
      font-family: "Work Sans", sans-serif;
      color: #fdf6ee;
      text-align: left;
      font-weight: 500;
    }
  } */

  .desc {
    width: 70%;
    margin: auto;
    margin-top: 15rem;
    /* transform: rotate(-7deg); */
    p {
      font-size: 2.4rem;
      font-family: "Work Sans", sans-serif;
      color: #fdf6ee;
      text-align: justify;
      line-height: 1.5;
      font-weight: 300;
    }
  }

  .hireme-btn {
    text-align: center;
    margin-top: 5rem;
  }

  .line {
    background-color: #fdf6ee;
    height: 0.5px;
    width: 90%;
    margin: 0 auto;
    margin-top: 10rem;
  }

  .nav-items {
    justify-content: center;
    gap: 4rem;
    margin: 3rem auto;

    div {
      cursor: pointer;
    }

    p,
    p a {
      color: #fdf6ee;
      font-size: 16px;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
    }
    a {
      text-decoration: none;
    }
  }
`;
