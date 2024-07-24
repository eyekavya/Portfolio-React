import styled from "styled-components";

export const StyledHireMeBtn = styled.section`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
  }

  .hireme {
    height: 5.5rem;
    width: 17rem;
    font-size: 2rem;
    font-weight: 700;
    color: #1c1b21;
    font-family: "Work Sans", sans-serif;
    padding: 1rem 2rem;
    background: #fff6d7;
    border: 2px solid #f9d34c;
    border-radius: 0.8em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  .hireme::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffe899;
    border-radius: inherit;
    // upper box border background
    box-shadow: 0 0 0 2px #f9d34c, 0 0.45em 0 0 #c9c2ab;
    // shadow box background
    //shadow box 0.625-> 0.45
    transform: translate3d(0, 0.5em, -1em);
    //middle box 0.75em-> 0.5
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  .hireme:hover {
    background: #fff6d7;
    transform: translate(0, 0.25em);
  }
  .hireme:hover::before {
    box-shadow: 0 0 0 2px #f9d34c, 0 0.3em 0 0 #c9c2ab;
    //shadow box hover
    transform: translate3d(0, 0.35em, -1em);
    //middle box hover
  }
  .hireme:active {
    background: #fff6d7;
    transform: translate(0em, 0.67em);
  }
  .hireme:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;
