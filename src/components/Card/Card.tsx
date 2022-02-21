import React from "react";
import styled from "styled-components";
import { cardStyles } from "./Card.styles";
import { CardProps, CardStyleProps } from "./Card.types";
import { constants } from "./Card.constants";

const StyledDiv = styled.div<CardStyleProps>`
  ${cardStyles}
  ${(parameter) => parameter.$className ?? null}
`;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      title,
      height = constants.DEFAULT_CARD_HEIGHT,
      width = constants.DEFAULT_CARD_WIDTH,
      borderColor = constants.DEFAULT_CARD_BORDER_COLOR,
      backgroundColor = constants.DEFAULT_CARD_BACKGROUND_COLOR,
      color = constants.DEFAULT_CARD_COLOR,
      className,
    },
    ref
  ) => {
    return (
      <StyledDiv
        ref={ref}
        $height={height}
        $width={width}
        $borderColor={borderColor}
        $backgroundColor={backgroundColor}
        $color={color}
        $className={className}
      >
        {title && <h1>{title}</h1>}
        {children}
      </StyledDiv>
    );
  }
);
