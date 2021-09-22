import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const prismBaseTheme = css`
  .article > h2 {
    padding: ${theme.space[8]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["3xl"]};
    font-weight: ${theme.fontWeights.bold};
  }

  .article > h3 {
    padding: ${theme.space[6]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["2xl"]};
    font-weight: ${theme.fontWeights.bold};
  }

  .article > h4 {
    padding: ${theme.space[4]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["xl"]};
    font-weight: ${theme.fontWeights.bold};
  }

  .article p,
  .article ul,
  .article ol {
    margin: ${theme.space[4]} 0 ${theme.space[8]};
    line-height: ${theme.lineHeights.tall};
    font-size: ${theme.fontSizes.lg};
  }

  .article a:hover {
    text-decoration: underline;
  }

  .article a.chakra-link {
    text-decoration: none;
  }

  .article #table-of-contents + ul,
  .article ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .article ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  .article #table-of-contents + ul > li,
  .article ol > li,
  .article ul > li {
    margin-bottom: ${theme.space[2]};
  }

  .article .icon.icon-link::before {
    content: "#";
    margin-right: ${theme.space[2]};
    display: inline-flex;
  }

  .article blockquote {
    padding: ${theme.space[4]};
    margin: 0;
    border-radius: ${theme.radii.sm};
  }

  .article blockquote > p {
    margin: 0;
  }

  pre {
    font-size: ${theme.fontSizes["sm"]};
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
  }

  inlinecode,
  pre {
    border-radius: ${theme.radii.sm};
  }

  inlinecode {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    font-size: ${theme.fontSizes["md"]};
  }

  inlinecode:before,
  inlinecode:after {
    content: "\`";
  }

  .shiki .line {
    padding: ${theme.space[1]} 0;
    display: inline-block;
  }

  .remark-code-title {
    margin: ${theme.space[6]} 0;
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border-top-left-radius: ${theme.radii.sm};
    border-top-right-radius: ${theme.radii.sm};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;

    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`;

export const prismDarkTheme = css`
  ${prismBaseTheme};

  code,
  pre {
    color: ${theme.colors.gray[50]};
  }

  .remark-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
  }

  .article a:not(.chakra-link) {
    color: ${theme.colors.blue[300]};
  }

  inlinecode {
    color: ${theme.colors.purple[300]};
  }

  .article blockquote {
    background: ${theme.colors.gray[800]};
  }

  .article > h2,
  .article > h3,
  .article > h4 {
    color: ${theme.colors.gray[200]};
  }

  .article p,
  .article ul,
  .article ol {
    color: ${theme.colors.gray[300]};
  }

  .article ol > li::marker,
  .article ul > li::marker {
    color: ${theme.colors.gray[300]};
  }
`;
