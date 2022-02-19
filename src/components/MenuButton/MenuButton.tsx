import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import {
  IconStyleProps,
  MenuButtonProps,
  MenuButtonStyleProps,
} from "./MenuButton.types";
import {
  iconStyles,
  menuButtonStyles,
  stickyContainerStyles,
} from "./MenuButton.styles";

const StyledButton = styled.button<MenuButtonStyleProps>`
  ${(parameter) => parameter.$className ?? menuButtonStyles}
`;

const StyledIcon = styled(AiOutlineMenu)<IconStyleProps>`
  ${iconStyles}
`;

const StyledDiv = styled.div<{ $isSticky: boolean }>`
  ${stickyContainerStyles}
`;

const vibrateOnClick = () => {
  if (!window || !window.navigator || !window.navigator.vibrate) {
    return;
  }
  window.navigator.vibrate(10);
};

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      isSticky = false,
      className,
      backgroundColor = "#266867",
      height = 50,
      width = 50,
    },
    ref
  ) => {
    const [menuToggled, setMenuToggled] = useState<boolean>(false);
    const onClick = () => {
      vibrateOnClick();
      setMenuToggled(!menuToggled);
    };
    return (
      <StyledDiv $isSticky={isSticky}>
        <StyledButton
          ref={ref}
          onClick={onClick}
          $className={className}
          $toggled={menuToggled}
          $backgroundColor={backgroundColor}
          $height={height}
          $width={width}
        >
          <StyledIcon size={30} $toggled={menuToggled} />
        </StyledButton>
      </StyledDiv>
    );
  }
);
