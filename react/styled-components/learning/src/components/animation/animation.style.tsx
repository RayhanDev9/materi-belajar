import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform:  rotate(0deg);
  }to {
    transform:  rotate(90deg);
  }
`;

export const AnimateLogo = styled.svg`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`;
