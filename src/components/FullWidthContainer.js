import styled from 'styled-components';

const FullWidthContainer = styled.div`
  display: block;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'inherit'
  }; 
`;

export default FullWidthContainer;
