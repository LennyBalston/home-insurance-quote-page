import styled from 'styled-components';

const FixedWidthContainer = styled.div`
  display: block;
  box-sizing: content-box;
  max-width: ${(props) => props.theme.fixedWidth};
  padding: 0 ${(props => props.p ? props.p : props.theme.spacing[32])};
  margin: 0 auto;
`;

export default FixedWidthContainer;
