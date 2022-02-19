import { css } from "styled-components";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";

export const menuButtonStyles = css<MenuButtonStyleProps>`
width: 50px;
height: 50px;

color: #FFFFFF;
background-color: #266867;

outline: none;
border: none;
border-radius 999em;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
cursor: pointer;

transition: width 400ms;

${(p) => p.$toggled && ` width: 150px;`};
`;

export const iconStyles = css<IconStyleProps>`
  transition: transform 400ms;
  position: absolute;
  ${(p) =>
    p.$toggled &&
    `transform: translate(150%) rotate(720deg) ;
  `};
`;
