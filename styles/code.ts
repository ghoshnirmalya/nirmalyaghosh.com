import { css } from "@emotion/core";
import { theme } from "@chakra-ui/core";

const prismBaseTheme = css`
  h2 {
    margin: ${theme.space[16]} 0 ${theme.space[4]};
    font-size: ${theme.fontSizes["2xl"]};
    font-weight: ${theme.fontWeights.bold};
  }

  p {
    margin: ${theme.space[4]} 0 ${theme.space[8]};
  }

  pre > .hljs {
    font-size: ${theme.fontSizes.sm};
    border-radius: ${theme.radii.md};
    padding: ${theme.space[4]};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes[2]};
  }
`;

export const prismLightTheme = css`
  ${prismBaseTheme};
`;

export const prismDarkTheme = css`
  ${prismBaseTheme};
`;
