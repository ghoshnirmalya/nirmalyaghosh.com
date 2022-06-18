import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const typographyStyles = css`
  // Headings
  .article > h2,
  .article > h3,
  .article > h4 {
    font-weight: ${theme.fontWeights.bold};
  }

  .article > h2 {
    padding: ${theme.space[8]} 0 0;
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
    line-height: ${theme.lineHeights.taller};
    font-size: ${theme.fontSizes.lg};
  }

  // Links
  .article a.chakra-link {
    text-decoration: none;
  }

  .article a[aria-hidden="true"]:hover {
    text-decoration: none;
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
  .article > blockquote {
    padding: ${theme.space[4]};
    margin: 0;
    border-radius: ${theme.radii.sm};
    background: ${theme.colors.gray[800]};
    border-width: 1.25px;
    border-color: ${theme.colors.gray[700]};
  }

  .article > blockquote > p,
  .article > blockquote > p > a {
    margin: 0;
  }

  // Table
  table {
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${theme.fontSizes.md};
    border-width: 1.25px;
    border-color: ${theme.colors.gray[700]};
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

  // Headings
  .article > h2,
  .article > h3,
  .article > h4 {
    color: ${theme.colors.gray[400]};
  }

  // Paragraphs
  .article p,
  .article ul,
  .article ol {
    color: ${theme.colors.gray[300]};
  }

  .article strong {
    color: ${theme.colors.gray[300]};
  }

  // Links
  .article a:not(.chakra-link) {
    color: ${theme.colors.green[500]};
    position: relative;
  }

  .article a:not(.chakra-link)[aria-hidden="true"] {
    top: -3px;
  }

  .article a:not(.chakra-link):hover {
    color: ${theme.colors.green[500]};
  }

  // Code
  .article > h2 code {
    font-size: ${theme.fontSizes["2xl"]};
  }

  .article > h3 code {
    font-size: ${theme.fontSizes["xl"]};
  }
  .article > h4 code {
    font-size: ${theme.fontSizes["lg"]};
  }

  // Table
  table {
    border-radius: ${theme.radii.sm};
    color: ${theme.colors.gray[400]};
    background-color: ${theme.colors.gray[800]};
  }

  thead th {
    border-bottom: 1px solid ${theme.colors.gray[900]};
  }

  td,
  th {
    border: 1px solid ${theme.colors.gray[900]};
  }
`;

export default typographyStyles;
