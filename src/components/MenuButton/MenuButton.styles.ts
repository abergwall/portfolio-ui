import { css } from "styled-components";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";

export const menuButtonStyles = css<MenuButtonStyleProps>`
width: ${(parameter) => parameter.$width}px;
height: ${(parameter) => parameter.$height}px;

color: #FFFFFF;
background-color: ${(parameter) => parameter.$backgroundColor} ;

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

export const stickyContainerStyles = css<{ $isSticky: boolean }>`
  ${(parameter) =>
    parameter.$isSticky
      ? `
    top: 0;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    display: flex;
    flex-direction: column;
`
      : ``}
`;
