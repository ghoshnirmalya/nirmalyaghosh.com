import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const prismBaseTheme = css`
  .article > h2 {
    padding: ${theme.space[8]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes["2xl"]};
    font-weight: ${theme.fontWeights.bold};
  }

  .article p,
  .article ul,
  .article ol {
    margin: ${theme.space[4]} 0 ${theme.space[8]};
    line-height: ${theme.lineHeights.tall};
  }

  .article a:hover {
    text-decoration: underline;
  }

  .article a.chakra-link {
    text-decoration: none;
  }

  .article img {
    border-radius: ${theme.radii.md};
    margin: ${theme.space[6]} 0;
  }

  .article #table-of-contents + ul,
  .article ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .article #table-of-contents + ul > li,
  .article ol > li {
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
    border-radius: ${theme.radii.md};
  }

  .article blockquote > p {
    margin: 0;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${theme.colors.gray[800]};
    background: none;
    font-family: "Menlo", Monaco, Consolas, Courier New, monospace;
    font-size: ${theme.fontSizes["sm"]};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights.tall};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }

  pre[class*="language-"] {
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${theme.colors.gray[50]};
    border-radius: ${theme.radii.md};
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  :not(pre) > code {
    font-size: ${theme.fontSizes["sm"]};
  }

  :not(pre) > code:before,
  :not(pre) > code:after {
    content: "\`";
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }

  .remark-code-title {
    margin: ${theme.space[6]} 0;
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border-top-left-radius: ${theme.radii.md};
    border-top-right-radius: ${theme.radii.md};
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

  :not(pre) > code[class*="language-"] {
    background: #011627;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${theme.colors.gray[50]};
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${theme.colors.gray[800]};
  }

  .mdx-marker {
    background-color: ${theme.colors.gray[700]};
  }

  .remark-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
  }

  .article a:not(.chakra-link) {
    color: ${theme.colors.blue[300]};
  }

  :not(pre) > code {
    color: ${theme.colors.purple[300]};
  }

  .article blockquote {
    background: ${theme.colors.gray[800]};
  }
`;
