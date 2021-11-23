import { css } from "@emotion/react";

const generalStyles = css`
  html {
    scroll-behavior: smooth;
  }

  .jumbotron-name-heading {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: shine 10s infinite linear;

    @keyframes shine {
      from {
        -webkit-filter: hue-rotate(0deg);
      }
      to {
        -webkit-filter: hue-rotate(-360deg);
      }
    }
  }
`;

export default generalStyles;
