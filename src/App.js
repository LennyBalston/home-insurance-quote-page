import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import logo from './assets/logo.png';
import useFetch from './hooks/useFetch';

import Container from './components/Container';
import Header from './components/Header';
import Logo from './components/Logo';

import Loading from './containers/Loading';
import Error from './containers/Error';
import Quote from './containers/Quote';

function App() {
  const { data, isLoading, isSuccess, isError } =
    useFetch(process.env.REACT_APP_QUOTE_API_URL);

  let content;
  if (isLoading) {
    content = <Loading />
  } else if (isSuccess) {
    console.log('quote data: ', data)
    content = <Quote quote={data} />
  } else if (isError) {
    content = <Error />
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <Container >
          <Logo src={logo} alt="logo" width="auto" height="auto" />
        </Container>
      </Header>
      <Container as="main" pt="default">
        {content}
      </Container>
    </ThemeProvider>
  );
}

export default App;
