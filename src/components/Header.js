import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 80px;
  }
`;

export default Header
