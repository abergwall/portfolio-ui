import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";
import { iconStyles, menuButtonStyles } from "./MenuButton.styles";

const StyledButton = styled.button<MenuButtonStyleProps>`
  ${menuButtonStyles}
`;

const StyledIcon = styled(AiOutlineMenu)<IconStyleProps>`
  ${iconStyles}
`;

const StyledDiv = styled.div`
  top: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  display: flex;
  flex-direction: column;
`;

const vibrateOnClick = () => {
  if (!window || !window.navigator || !window.navigator.vibrate) {
    return;
  }
  window.navigator.vibrate(10);
};

export const MenuButton: React.FC = () => {
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const onClick = () => {
    vibrateOnClick();
    setMenuToggled(!menuToggled);
  };
  return (
    <StyledDiv>
      <StyledButton onClick={onClick} $toggled={menuToggled}>
        <StyledIcon size={30} $toggled={menuToggled} />
      </StyledButton>
    </StyledDiv>
  );
};
