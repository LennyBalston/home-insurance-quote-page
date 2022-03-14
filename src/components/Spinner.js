
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

  width: 100px;
  height: 100px;
  border-width: 16px;
  border-style: solid;
  border-color: ${(props) => props.theme.secondary};
  border-top-color: ${(props) => props.theme.primary};
  border-bottom-color: ${(props) => props.theme.primary};
  border-radius: 50%;
`;

export default Spinner;
