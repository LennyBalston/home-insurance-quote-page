import styled from 'styled-components';

const Heading2 = styled.h1`
  color: ${(props) => props.theme.font.heading2.color};
  color: ${(props) => props.color && props.theme[props.color]};
  font-size: ${(props) => props.theme.font.heading2.size};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export default Heading2;
