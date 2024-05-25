import styled from "styled-components";

export const StyledAbout = styled.section`
  .about {
    gap: 2rem;
    margin: 20rem auto;
  }
  .desc-container p {
    font-size: 3rem;
    font-weight: 500;
    color: #ababab;
    text-align: justify;
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
`;