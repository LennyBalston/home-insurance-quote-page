import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import logo from './assets/logo.png';

import useFetch from './hooks/useFetch';
import Container from './components/Container';
import ContainerWrapper from './components/ContainerWrapper';
import Header from './components/Header';
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
      <ContainerWrapper backgroundColor={theme.color.white}>
        <Container >
          <Header>
            <Logo src={logo} alt="logo" width="auto" height="auto" />
          </Header>
        </Container>
      </ContainerWrapper>
      <ContainerWrapper>
        <Container as="main"  >
          {quoteContent}
        </Container>
      </ContainerWrapper>
    </ThemeProvider>
  );
}

export default App;
