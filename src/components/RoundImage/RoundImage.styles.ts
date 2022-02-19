import { css } from "styled-components";

export const roundImageStyles = css<{ $height: number }>`
  height: ${(parameter) => parameter.$height}px;
  border-radius: 50%;
  border: solid #f58800;
  margin: 15px;
`;
