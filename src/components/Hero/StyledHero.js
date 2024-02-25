import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url(/images/magicpattern.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-box-parent {
    width: max-content;
    height: calc(100vh - 70.4px);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hero-box-general {
    color: #1c1b21;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    text-align: center;
  }
  .hello {
    max-height: 123px;
    max-width: 226px;
    background-color: #b9e4ff;
    font-size: 2.7rem;
    padding: 30px 10px;
    border-radius: 7rem;
    transform: rotate(-19deg);
    font-weight: 800;
    position: relative;
    z-index: 4;
  }
  .iam {
    max-height: 210px;
    max-width: 425px;
    background-color: #f9d34c;
    font-size: 9.6rem;
    padding: 20px 100px;
    border-radius: 11rem;
    transform: rotate(-11deg);
    position: relative;
    left: 5rem;
    bottom: 3rem;
    z-index: 3;
  }
  .kavya {
    max-height: 216px;
    max-width: 465px;
    background-color: #f2a4d3;
    font-size: 9.6rem;
    padding: 24px 80px;
    border-radius: 8rem;
    transform: rotate(10.53deg);
    position: relative;
    top: 5rem;
    right: 3rem;
  }
  .hero-smiley {
    position: relative;
    left: 7rem;
  }
`;
