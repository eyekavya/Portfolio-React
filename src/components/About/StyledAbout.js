import styled from "styled-components";

export const StyledAbout = styled.section`
  .about {
    gap: 2rem;
    height: 100vh;
    margin: 0 auto;
  }
  .desc-container p {
    font-size: 2.5rem;
    font-weight: 500;
    color: #fdf6ee;
    font-family: "Montserrat", sans-serif;
    text-align: justify;
    line-height: 1.5;
  }
  .desc-container img {
    width: 4rem;
    position: relative;
    top: 4px;
    cursor: pointer;
  }
  .photo-container img {
    object-fit: cover;
    object-position: right;
    width: 50rem;
  }
  .hireme {
    text-align: center;
    margin-top: 2rem;
  }
`;
