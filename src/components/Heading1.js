import styled from 'styled-components';

const Heading1 = styled.h1`
  color: ${(props) => props.theme.font.heading1.color};
  color: ${(props) => props.color && props.theme[props.color]};
  font-size: ${(props) => props.theme.font.heading1.size};
  font-weight: ${(props) => props.theme.font.weight.bold};
  padding-bottom: ${(props) => props.pb && props.theme.spacing[props.pb]};
`;

export default Heading1;
