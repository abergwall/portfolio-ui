import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { menuIconStyles } from "./MenuIcon.styles";
import { MenuIconProps, MenuIconStyleProps } from "./MenuIcon.types";

const StyledIcon = styled(AiOutlineMenu)<MenuIconStyleProps>`
  ${menuIconStyles}
`;
export const MenuIcon: React.FC<MenuIconProps> = ({ size, menutoggled }) => {
  return (
    <StyledIcon size={size} $menuToggled={menutoggled}>
      MenuIcon
    </StyledIcon>
  );
};
