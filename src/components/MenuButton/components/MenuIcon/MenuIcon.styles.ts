import { css } from "styled-components";
import { MenuIconStyleProps } from "./MenuIcon.types";

export const menuIconStyles = css<MenuIconStyleProps>`
  transition: transform 400ms;
  position: absolute;
  ${(parameter) =>
    parameter.$menuToggled &&
    `transform: translate(${parameter.$width * 3}%) rotate(720deg) ;
  `};
`;
