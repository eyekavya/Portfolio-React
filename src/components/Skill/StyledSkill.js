import styled from "styled-components";

export const StyledSkill = styled.section`
  .skill {
    height: 100vh;
  }

  .skill-main {
    gap: 10rem;
    padding: 10rem;
  }
  .skill-desc {
    font-family: "Work Sans", sans-serif;
    color: #fdf6ee;
    h2 {
      font-weight: 600;
      font-size: 5.7rem;
      margin: 0;
    }
    p {
      font-size: 2.2rem;
      text-align: justify;
      font-weight: 400;
      line-height: 1.4;
    }
    .skillDesc {
      min-height: 141px;
    }

    .skill-det {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    }

    .skill-level {
      gap: 2rem;
    }

    .dot-group {
      gap: 1rem;
    }

    .dot {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    }

    .dot-react {
      background-color: #00d8ff;
    }

    .dot-redux {
      background-color: #764abc;
    }

    .dot-js {
      background-color: #d4b830;
    }

    .dot-sass {
      background-color: #cf649a;
    }

    .dot-mui {
      background-color: #0081cb;
    }

    .dot-antd {
      background-color: #29cdff;
    }

    .dot-bootstrap {
      background-color: #9013fe;
    }

    .dot-git {
      background-color: #de4c36;
    }

    .dot-figma {
      background-color: #de4c36;
    }

    .dot-grey {
      background-color: #ababab;
    }

    .dot-react-grey {
      background-image: linear-gradient(
        90deg,
        hsl(189deg 100% 50%) 1%,
        hsl(191deg 96% 58%) 33%,
        hsl(191deg 92% 61%) 41%,
        hsl(192deg 87% 62%) 46%,
        hsl(192deg 82% 64%) 48%,
        hsl(193deg 77% 65%) 50%,
        hsl(193deg 72% 66%) 51%,
        hsl(193deg 67% 66%) 51%,
        hsl(193deg 62% 67%) 51%,
        hsl(194deg 56% 67%) 51%,
        hsl(194deg 51% 67%) 50%,
        hsl(194deg 46% 68%) 50%,
        hsl(194deg 41% 68%) 49%,
        hsl(194deg 36% 68%) 49%,
        hsl(194deg 31% 68%) 49%,
        hsl(195deg 26% 68%) 49%,
        hsl(195deg 22% 68%) 50%,
        hsl(195deg 17% 68%) 52%,
        hsl(195deg 13% 68%) 54%,
        hsl(195deg 8% 67%) 59%,
        hsl(195deg 4% 67%) 67%,
        hsl(0deg 0% 67%) 99%
      );
    }

    .dot-bootstrap-grey {
      background-image: linear-gradient(
        90deg,
        hsl(272deg 99% 54%) 13%,
        hsl(272deg 94% 54%) 34%,
        hsl(272deg 90% 55%) 41%,
        hsl(272deg 85% 55%) 45%,
        hsl(272deg 80% 56%) 48%,
        hsl(272deg 76% 57%) 49%,
        hsl(272deg 71% 57%) 50%,
        hsl(272deg 66% 58%) 50%,
        hsl(272deg 61% 59%) 50%,
        hsl(272deg 57% 59%) 50%,
        hsl(272deg 52% 60%) 50%,
        hsl(272deg 47% 61%) 50%,
        hsl(272deg 42% 61%) 50%,
        hsl(272deg 38% 62%) 50%,
        hsl(272deg 33% 63%) 50%,
        hsl(272deg 28% 63%) 50%,
        hsl(271deg 24% 64%) 51%,
        hsl(273deg 19% 65%) 52%,
        hsl(272deg 15% 65%) 55%,
        hsl(272deg 10% 66%) 59%,
        hsl(277deg 5% 66%) 66%,
        hsl(0deg 0% 67%) 87%
      );
    }

    .dot-git-grey {
      background-image: linear-gradient(
        90deg,
        hsl(8deg 72% 54%) 13%,
        hsl(8deg 68% 55%) 34%,
        hsl(8deg 65% 55%) 41%,
        hsl(8deg 62% 56%) 45%,
        hsl(8deg 58% 57%) 48%,
        hsl(8deg 55% 57%) 49%,
        hsl(8deg 52% 58%) 50%,
        hsl(8deg 48% 58%) 50%,
        hsl(8deg 44% 59%) 50%,
        hsl(8deg 41% 60%) 50%,
        hsl(8deg 38% 60%) 50%,
        hsl(8deg 34% 61%) 50%,
        hsl(8deg 31% 62%) 50%,
        hsl(8deg 27% 62%) 50%,
        hsl(8deg 24% 63%) 50%,
        hsl(8deg 21% 63%) 50%,
        hsl(9deg 17% 64%) 51%,
        hsl(10deg 14% 65%) 52%,
        hsl(10deg 10% 65%) 55%,
        hsl(5deg 7% 66%) 59%,
        hsl(0deg 3% 66%) 66%,
        hsl(0deg 0% 67%) 87%
      );
    }

    .dot-figma-grey {
      background-image: linear-gradient(
        90deg,
        hsl(14deg 89% 53%) 13%,
        hsl(14deg 85% 54%) 34%,
        hsl(13deg 81% 55%) 41%,
        hsl(13deg 76% 55%) 45%,
        hsl(13deg 72% 56%) 48%,
        hsl(14deg 68% 56%) 49%,
        hsl(13deg 63% 57%) 50%,
        hsl(14deg 59% 58%) 50%,
        hsl(13deg 55% 59%) 50%,
        hsl(14deg 51% 59%) 50%,
        hsl(14deg 46% 60%) 50%,
        hsl(13deg 42% 61%) 50%,
        hsl(13deg 38% 61%) 50%,
        hsl(14deg 34% 62%) 50%,
        hsl(14deg 30% 63%) 50%,
        hsl(14deg 26% 63%) 50%,
        hsl(14deg 21% 64%) 51%,
        hsl(14deg 17% 65%) 52%,
        hsl(14deg 12% 65%) 55%,
        hsl(16deg 9% 66%) 59%,
        hsl(9deg 4% 66%) 66%,
        hsl(0deg 0% 67%) 87%
      );
    }
  }

  .logo-group {
    justify-content: space-between;
  }
  .logo-group img {
    width: 8rem;
    cursor: pointer;
  }
`;
