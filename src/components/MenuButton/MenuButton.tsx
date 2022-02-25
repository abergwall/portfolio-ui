import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  DEFAULT_MENUBUTTON_BACKGROUND_COLOR,
  DEFAULT_MENUBUTTON_HEIGHT,
  DEFAULT_MENUBUTTON_ICON_SIZE,
  DEFAULT_MENUBUTTON_WIDTH,
} from "./MenuButton.constants";
import { MenuButtonProps, MenuButtonStyleProps } from "./MenuButton.types";
import { menuButtonStyles } from "./MenuButton.styles";
import { MenuIcon, StickyWrapper } from "./components";
import { FaChevronUp } from "react-icons/fa";
import { useIsMounted } from "../../hooks";

const StyledButton = styled.button<MenuButtonStyleProps>`
  ${menuButtonStyles}
  ${(parameter) => parameter.$className ?? null}
`;

const openMenuKeyFrame = keyframes`
    0%   {opacity: 0;}
    50%  {opacity: 0;}
    100% {opacity: 1;}
`;

const openMenuAnimation = css`
  animation: ${openMenuKeyFrame} 1s;
`;

const StyledDiv = styled.div<{ $height: number; $menuToggled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
  ${openMenuAnimation}
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
      children,
    },
    ref
  ) => {
    const isMounted = useIsMounted();
    const [menuClosed, setMenuClosed] = useState<boolean>(false);
    const [menuToggled, setMenuToggled] = useState<boolean>(false);

    const onClick = () => {
      vibrateOnClick();
      setMenuToggled(!menuToggled);
      setMenuClosed(!menuClosed);
    };

    return (
      <StickyWrapper isSticky={isSticky}>
        <StyledButton
          ref={ref}
          $className={className}
          $toggled={menuToggled}
          $isMounted={isMounted.current}
          $backgroundColor={backgroundColor}
          $height={height}
          $width={width}
        >
          <MenuIcon
            size={menuIconSize}
            width={width}
            menutoggled={menuToggled}
            isMounted={isMounted.current}
            onClick={onClick}
          />

          {menuToggled && (
            <>
              <StyledDiv $height={height} $menuToggled={menuToggled}>
                {children}
              </StyledDiv>
            </>
          )}
        </StyledButton>
      </StickyWrapper>
    );
  }
);
