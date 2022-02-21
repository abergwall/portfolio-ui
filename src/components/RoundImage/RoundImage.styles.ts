import { css } from "styled-components";

export const roundImageStyles = css<{ $height: number; $width?: number }>`
  height: ${(parameter) => parameter.$height}px;
  ${(parameter) => parameter.$width && `width: ${parameter.$width}`}px;
  border-radius: 50%;
  border: solid #f58800;
  margin: 15px;
`;
