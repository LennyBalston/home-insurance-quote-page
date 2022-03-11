import React, {useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import logo from './assets/logo.png';

import Container from './components/Container';
import Header from './components/Header';
import Logo from './components/Logo';

import Loading from './containers/Loading';
import Error from './containers/Error';
import Quote from './containers/Quote';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_QUOTE_API_URL)
    .then(res => {
      if (res.ok) {
        return res.text();
      } else {
        throw new Error()
      }      
    })
    .then(data => {
      console.log('data: ', JSON.parse(data));
      setQuote(JSON.parse(data)[0]);
      setIsSuccess(true);
      setIsLoading(false);
    })
    .catch(err => {
      console.log('error');
      setIsError(true);
      setIsLoading(false);
    })
  } ,[]);

  let content;
  if (isLoading) {
    content = <Loading />
  } else if (isSuccess) {
    console.log('quote data: ', quote)
    content = <Quote quote={quote}/>
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
