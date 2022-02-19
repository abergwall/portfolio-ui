import React from "react";
import styled from "styled-components";
import { cardStyles } from "./Card.styles";
import { CardProps, CardStyleProps } from "./Card.types";

const StyledDiv = styled.div<CardStyleProps>`
  ${cardStyles}
`;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, title, height = 300, width = 300 }, ref) => {
    return (
      <StyledDiv ref={ref} $height={height} $width={width}>
        {title && <h1>{title}</h1>}
        {children}
      </StyledDiv>
    );
  }
);
