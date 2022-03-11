
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  /** Nunito Regular **/
  @font-face {
    font-family: "Nunito";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Nunito-Regular.woff2") format("woff2"),
 url("/fonts/Nunito-Regular.woff") format("woff");
  }

  /** Nunito Bold **/
  @font-face {
    font-family: "Nunito";
    font-weight: 700;
    font-style: bold;
    src: url("/fonts/Nunito-Regular.woff2") format("woff2"),
  url("/fonts/Nunito-Regular.woff") format("woff");
  }

  body {
    margin: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};   
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => `calc((
      ${props.theme.font.size.default} / ${props.theme.rootSize}) * 1rem)`};
    font-weight: ${(props) => props.theme.font.weight.regular};
    line-height: ${(props) => props.theme.font.lineHeight};
  }

  a {
    text-decoration: none;

  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;