import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import logo from './assets/logo.png';

import useFetch from './hooks/useFetch';
import FixedWidthContainer from './components/FixedWidthContainer';
import Container from './components/Container';
import Logo from './components/Logo';

import Loading from './components/Loading';
import Error from './components/Error';
import Quote from './containers/Quote';

function App() {
  const {
    data: quote,
    isLoading: isQuoteLoading,
    isSuccess: isQuoteSuccess,
    isError: isQuoteError
  } = useFetch(process.env.REACT_APP_QUOTE_API_URL);

  let quoteContent;
  if (isQuoteLoading) {
    quoteContent = <Loading />
  } else if (isQuoteSuccess) {
    quoteContent = <Quote quote={quote[0]} />
  } else if (isQuoteError) {
    quoteContent = <Error />
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container backgroundColor="white">
        <FixedWidthContainer >
          <Container as="header" display="flex" alignItems="center" height="40px" mdHeight="80px">
            <Logo src={logo} alt="logo" width="auto" height="auto" />
          </Container>
        </FixedWidthContainer>
      </Container>
      <Container backgroundColor="green">
        <FixedWidthContainer as="main"  >
          {quoteContent}
        </FixedWidthContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
