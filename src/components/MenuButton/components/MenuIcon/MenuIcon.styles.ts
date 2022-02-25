import { css, keyframes } from "styled-components";
import { MenuIconStyleProps } from "./MenuIcon.types";

export const keys = keyframes`
from {
  transform: translate(0%) rotate(0deg);
}
to {
  transform: translate(200%) rotate(720deg);
}
`;

export const closeMenuAnimation = keyframes`
from {
  transform: translate(200%) rotate(0deg);
}
to {
  transform: translate(0%) rotate(720deg);
}
`;

export const menuIconStyles = css<MenuIconStyleProps>`
  position: absolute;
  cursor: pointer;
  ${(parameter) =>
    parameter.$menuToggled
      ? css`
          -webkit-animation: ${keys} 400ms;
          animation-fill-mode: forwards;
        `
      : null};

  ${(parameter) =>
    !parameter.$menuToggled && parameter.$isMounted
      ? css`
          -webkit-animation: ${closeMenuAnimation} 400ms;
          animation-fill-mode: forwards;
        `
      : null};
`;
