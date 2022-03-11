
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-width: 8px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.background};
  border-top-color: ${(props) => props.theme.color.primary.main};
  border-bottom-color: ${(props) => props.theme.color.primary.main};
  border-radius: 50%;
  width: ${(props) => props.theme.spinnerSize};
  height: ${(props) => props.theme.spinnerSize};
`;

export default Spinner;
