import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";
import { iconStyles, menuButtonStyles } from "./MenuButton.styles";
import { Card } from "../Card";

const StyledButton = styled.button<MenuButtonStyleProps>`
  ${menuButtonStyles}
`;

const StyledIcon = styled(AiOutlineMenu)<IconStyleProps>`
  ${iconStyles}
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
`;

const vibrateOnClick = () => {
  if (!window || !window.navigator || !window.navigator.vibrate) {
    return;
  }
  window.navigator.vibrate(20);
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
      {menuToggled && <Card>Hello</Card>}
    </StyledDiv>
  );
};
