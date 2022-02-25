import { css, keyframes } from "styled-components";
import { MenuButtonStyleProps } from "./MenuButton.types";

const openMenuAnimation = ($width: number, $height: number) => keyframes`
    0%   {
      width: ${$width}px;     
      min-height: ${$height}px; 
      border-radius 999em; 
    }
    50%  {
      width: ${$width * 4}px;
      min-height: ${$height}px; 
      border-radius: 10px;
    }
    100% {
      width: ${$width * 4}px;
      min-height: ${$height * 5}px; 
      border-radius: 10px; 
    }
`;
const closeMenuAnimation = keyframes`
    0%   {width: 200px; min-height: 250px; border-radius 10px;}
    50%  {width: 50px; min-height: 250px; border-radius 10px; }
    100% {width: 50px;  min-height: 50px; border-radius 999em;}
`;

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


${(parameter) =>
  parameter.$toggled
    ? css`
        -webkit-animation: ${openMenuAnimation(
            parameter.$width,
            parameter.$height
          )}
          1s;
        animation-fill-mode: forwards;
      `
    : null}

  ${(parameter) =>
    !parameter.$toggled && parameter.$isMounted
      ? css`
          -webkit-animation: ${closeMenuAnimation} 1s;
          animation-fill-mode: forwards;
        `
      : null}
`;
