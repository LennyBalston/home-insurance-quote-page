import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    grid-template-columns: 1fr 1fr;
  } 
`;

export default Grid;
