import styled from "styled-components";

export const StyledProject = styled.section`
  .project {
    height: 100vh;
    margin-top: 20rem;
  }

  .flex-row {
    justify-content: space-around;
  }

  .project-container img {
    display: block;
    margin: 0 auto;
    height: 40vw;
    width: 40vw;
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
