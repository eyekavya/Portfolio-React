import styled from "styled-components";

export const StyledProject = styled.section`
  .project {
    height: 100vh;
    margin-top: 20rem;
  }

  .project-container img {
    display: block;
    margin: 0 auto;
    height: 40vw;
    width: 40vw;
  }

  .previous-btn {
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-right: 50px solid #555;
    border-bottom: 25px solid transparent;
  }

  .next-btn {
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-left: 50px solid #555;
    border-bottom: 25px solid transparent;
  }

  .flex-row {
    justify-content: space-around;
  }
`;
