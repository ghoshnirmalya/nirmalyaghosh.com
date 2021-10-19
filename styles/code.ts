import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const prismBaseTheme = css`
  // Headings
  .article > h2,
  .article > h3,
  .article > h4 {
    font-weight: ${theme.fontWeights.bold};
  }

  .article > h2 {
    padding: ${theme.space[8]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["3xl"]};
  }

  .article > h3 {
    padding: ${theme.space[6]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["2xl"]};
  }

  .article > h4 {
    padding: ${theme.space[4]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["xl"]};
  }

  // Paragraphs
  .article p,
  .article ul,
  .article ol,
  .article a:not(.chakra-link) {
    margin: ${theme.space[4]} 0 ${theme.space[8]};
    line-height: ${theme.lineHeights.tall};
    font-size: ${theme.fontSizes.lg};
  }

  // Links
  .article a.chakra-link {
    text-decoration: none;
  }

  .article a[aria-hidden="true"]:hover {
    text-decoration: none;
  }

  .article .icon.icon-link {
    content: "#";
    margin-right: ${theme.space[2]};
  }

  .article .icon.icon-link::before {
    content: "🔗";
    margin-right: ${theme.space[2]};
    display: inline-flex;
  }

  // Lists
  .article li {
    padding-left: ${theme.space[8]};
    list-style: none;
    counter-increment: custom-reset;
    position: relative;
  }

  .article ol > li,
  .article ul > li {
    margin-bottom: ${theme.space[2]};
  }

  .article ol > li > p,
  .article ul > li > p {
    display: inline;
  }

  .article ol > li::before,
  .article ul > li::before {
    color: ${theme.colors.purple[300]};
    left: 0;
    position: absolute;
  }

  .article ol > li::before {
    content: counter(custom-reset) ". ";
  }

  .article ul > li::before {
    content: "\\2022";
  }

  // Typography
  .article blockquote {
    padding: ${theme.space[4]};
    margin: 0;
    border-radius: ${theme.radii.sm};
  }

  .article blockquote > p {
    margin: 0;
  }

  // Code
  pre {
    font-size: ${theme.fontSizes["sm"]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    border-radius: ${theme.radii.sm};
  }

  .article > h2 code {
    font-size: ${theme.fontSizes["2xl"]};
  }

  .article > h3 code {
    font-size: ${theme.fontSizes["xl"]};
  }
  .article > h4 code {
    font-size: ${theme.fontSizes["lg"]};
  }

  :not(pre) > code {
    border-radius: ${theme.radii.sm};
  }

  :not(pre) > code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    font-size: ${theme.fontSizes["sm"]};
  }

  :not(pre) > code:before,
  :not(pre) > code:after {
    content: "\`";
  }

  .grvsc-source > span {
    padding: ${theme.space[1]} 0;
    display: inline-block;
  }

  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {
    height: 100%;
  }

  code.grvsc-code {
    display: grid;
  }

  pre.grvsc-container {
    border-radius: ${theme.radii.sm};
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

  // Table
  table {
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${theme.fontSizes.md};
  }

  .article table a:not(.chakra-link) {
    font-size: ${theme.fontSizes.md};
  }

  thead td,
  thead th {
    border-bottom-width: 2px;
    font-size: ${theme.fontSizes.sm};
  }

  thead th {
    vertical-align: bottom;
  }

  td,
  th {
    padding: 0.75rem;
    vertical-align: top;
  }
`;

export const prismDarkTheme = css`
  ${prismBaseTheme};

  // Headings
  .article > h2,
  .article > h3,
  .article > h4 {
    color: ${theme.colors.gray[200]};
  }

  // Paragraphs
  .article p,
  .article ul,
  .article ol {
    color: ${theme.colors.gray[400]};
  }

  .article strong {
    color: ${theme.colors.gray[300]};
  }

  // Links
  .article a:not(.chakra-link) {
    color: ${theme.colors.blue[300]};
  }

  .article a:not(.chakra-link):hover {
    color: ${theme.colors.blue[400]};
  }

  // Code
  code,
  pre {
    color: ${theme.colors.gray[50]};
  }

  .remark-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
  }

  :not(pre) > code {
    color: ${theme.colors.purple[300]};
  }

  .article blockquote {
    background: ${theme.colors.gray[800]};
  }

  .grvsc-container.default-dark,
  .grvsc-container.tomorrow-night-blue {
    background: ${theme.colors.gray[800]};
  }

  // Table
  table {
    border-radius: ${theme.radii.sm};
    color: ${theme.colors.gray[400]};
    background-color: ${theme.colors.gray[800]};
  }

  thead th {
    border-bottom: 2px solid ${theme.colors.gray[900]};
  }

  td,
  th {
    border: 2px solid ${theme.colors.gray[900]};
  }
`;
