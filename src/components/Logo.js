import styled from 'styled-components';

const Logo = styled.img`  
  display: block;
  max-height: 20px;

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    max-height: 40px;
  }  
`;

export default Logo;