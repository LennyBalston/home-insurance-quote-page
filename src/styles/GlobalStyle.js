
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
    src: url("/fonts/Nunito-Bold.woff2") format("woff2"),
  url("/fonts/Nunito-Bold.woff") format("woff");
  }

  html {
  box-sizing: border-box;
  font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};   
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size.default};
    font-weight: ${(props) => props.theme.font.weight.normal};
    line-height: ${(props) => props.theme.font.lineHeight};
  }

  a {
    text-decoration: none;
  }

  p, h1, h2 {
    margin: 0;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
