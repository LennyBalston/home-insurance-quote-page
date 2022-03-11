import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 80px;
  }
`;

export default Header
