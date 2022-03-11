import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  align-items: ${(props) => props.alignItems ? props.alignItems : 'initial'};
  padding: 0 ${(props) => `calc((
      ${props.theme.spacing.small} / ${props.theme.rootSize}) * 1rem)`};
`;

export default Container