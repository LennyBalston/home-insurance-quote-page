import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import logo from './assets/logo.png';

import Container from './components/Container';
import Header from './components/Header';
import Logo from './components/Logo';

import Loading from './containers/Loading';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <Container >
        <Logo src={logo} alt="logo" width="auto" height="auto" />
        </Container>
      </Header>
      <Loading />
    </ThemeProvider>
  );
}

export default App;
