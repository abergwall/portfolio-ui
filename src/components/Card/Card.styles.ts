import { css } from "styled-components";
import { CardStyleProps } from "./Card.types";

export const cardStyles = css<CardStyleProps>`
  border-radius: 40px;
  height: ${(parameter) => parameter.$height}px;
  width: ${(parameter) => parameter.$width}px;
  border: #f58800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-style: solid;
  background-color: #ffffff;
  color: #1a4645;
`;
