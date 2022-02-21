import { css } from "styled-components";
import { MenuIconStyleProps } from "./MenuIcon.types";

export const menuIconStyles = css<MenuIconStyleProps>`
  transition: transform 400ms;
  position: absolute;
  ${(p) =>
    p.$menuToggled &&
    `transform: translate(150%) rotate(720deg) ;
  `};
`;
