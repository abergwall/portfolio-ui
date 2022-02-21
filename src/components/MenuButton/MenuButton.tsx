import React, { useState } from "react";
import styled from "styled-components";
import {
  DEFAULT_MENUBUTTON_BACKGROUND_COLOR,
  DEFAULT_MENUBUTTON_HEIGHT,
  DEFAULT_MENUBUTTON_ICON_SIZE,
  DEFAULT_MENUBUTTON_WIDTH,
} from "./MenuButton.constants";
import { MenuButtonProps, MenuButtonStyleProps } from "./MenuButton.types";
import { menuButtonStyles } from "./MenuButton.styles";
import { MenuIcon, StickyWrapper } from "./components";

const StyledButton = styled.button<MenuButtonStyleProps>`
  ${menuButtonStyles}
  ${(parameter) => parameter.$className ?? null}
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
      backgroundColor = DEFAULT_MENUBUTTON_BACKGROUND_COLOR,
      height = DEFAULT_MENUBUTTON_HEIGHT,
      width = DEFAULT_MENUBUTTON_WIDTH,
      menuIconSize = DEFAULT_MENUBUTTON_ICON_SIZE,
    },
    ref
  ) => {
    const [menuToggled, setMenuToggled] = useState<boolean>(false);
    const onClick = () => {
      vibrateOnClick();
      setMenuToggled(!menuToggled);
    };
    return (
      <StickyWrapper isSticky={isSticky}>
        <StyledButton
          ref={ref}
          onClick={onClick}
          $className={className}
          $toggled={menuToggled}
          $backgroundColor={backgroundColor}
          $height={height}
          $width={width}
        >
          <MenuIcon
            size={menuIconSize}
            width={width}
            menutoggled={menuToggled}
          />
        </StyledButton>
      </StickyWrapper>
    );
  }
);
