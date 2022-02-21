import React from "react";
import styled from "styled-components";
import { cardStyles } from "./Card.styles";
import { CardProps, CardStyleProps } from "./Card.types";
import {
  DEFAULT_CARD_BACKGROUND_COLOR,
  DEFAULT_CARD_BORDER_COLOR,
  DEFAULT_CARD_COLOR,
  DEFAULT_CARD_HEIGHT,
  DEFAULT_CARD_WIDTH,
} from "./Card.constants";

const StyledDiv = styled.div<CardStyleProps>`
  ${cardStyles}
  ${(parameter) => parameter.$className ?? null}
`;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      title,
      height = DEFAULT_CARD_HEIGHT,
      width = DEFAULT_CARD_WIDTH,
      borderColor = DEFAULT_CARD_BORDER_COLOR,
      backgroundColor = DEFAULT_CARD_BACKGROUND_COLOR,
      color = DEFAULT_CARD_COLOR,
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
