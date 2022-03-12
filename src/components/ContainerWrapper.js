import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: block;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'inherit'
  }; 
`;

export default ContainerWrapper;
