import styled from 'styled-components';

const Grid = styled.div`
  background-color: yellow;
  display: grid;
  grid-gap: 16px;

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    grid-template-columns: 1fr 1fr;
  } 

  & > * {
    background-color: pink;
  }
`;

export default Grid;
