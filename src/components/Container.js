import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'initial'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'initial'};
  padding: 0 ${(props) => `calc((
      ${props.theme.spacing.default} / ${props.theme.rootSize}) * 1rem)`};
  padding-top: ${(props) => `calc((
      ${props.theme.spacing[props.pt]} / ${props.theme.rootSize}) * 1rem)`};
`;

export default Container