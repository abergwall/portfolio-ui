import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { IconStyleProps, MenuButtonStyleProps } from "./MenuButton.types";
import { iconStyles, menuButtonStyles } from "./MenuButton.styles";
import { Card } from "../Card";

const StyledDiv = styled.button<MenuButtonStyleProps>`
  ${menuButtonStyles}
`;

const StyledIcon = styled(AiOutlineMenu)<IconStyleProps>`
  ${iconStyles}
`;

export const MenuButton: React.FC = () => {
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const onClick = () => {
    setMenuToggled(!menuToggled);
  };
  return (
    <>
      <StyledDiv onClick={onClick} $toggled={menuToggled}>
        <StyledIcon size={30} $toggled={menuToggled} />
      </StyledDiv>
      {menuToggled && <Card>Hello</Card>}
    </>
  );
};
