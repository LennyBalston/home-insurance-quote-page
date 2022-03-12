import styled from 'styled-components';

const Container = styled.div`
  display: block;
  margin-top: ${(props) => props.mt ? `calc((
      ${props.mt} / ${props.theme.rootSize}) * 1rem)` : 'inherit'};
  margin-bottom: ${(props) => props.mb ? `calc((
      ${props.mb} / ${props.theme.rootSize}) * 1rem)` : 'inherit'};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'inherit'
  }; 
  box-shadow: ${(props) => props.shadow && props.theme.boxShadow};
  padding: ${(props) => props.padding ? `calc((
      ${props.padding} / ${props.theme.rootSize}) * 1rem)` : 'inherit'};
`;

export default Container;
