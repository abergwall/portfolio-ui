import { css } from "styled-components";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";

export const menuButtonStyles = css<MenuButtonStyleProps>`
width: 50px;
height: 50px;

color: #FFFFFF;
background-color: #266867;

margin: 15px 0px 0px 15px;

outline: none;
border: none;
border-radius 999em;

display:flex;
justify-content:flex-end;
align-items: center;

cursor: pointer;

transition: width 1000ms;


${(p) => p.$toggled && ` width: 20vh;`};
`;

export const iconStyles = css<IconStyleProps>`
  transition: transform 400ms, right 1000ms ease-in-out;
  margin: 4px;
  ${(p) => p.$toggled && `transform: rotate(360deg)`};
`;
