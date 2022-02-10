import { css } from "styled-components";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";

export const menuButtonStyles = css<MenuButtonStyleProps>`
width: 55px;
height: 55px;

color: #FFFFFF;
background-color: #266867;

margin: 2% 0% 0% 2%;

border: none;
border-radius 999em;

display:flex;
justify-content:flex-end;
align-items: center;
left: 0;
position: relative;

cursor: pointer;

transition: width 1000ms;

${(p) => p.$toggled && ` width: 20vh`};
`;

export const iconStyles = css<IconStyleProps>`
  transition: transform 400ms, right 1000ms ease-in-out;
  margin-right: 7px;

  ${(p) => p.$toggled && `transform: rotate(360deg)`};
`;
