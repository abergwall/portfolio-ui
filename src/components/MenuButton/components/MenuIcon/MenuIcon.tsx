import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import { menuIconStyles } from "./MenuIcon.styles";
import { MenuIconProps, MenuIconStyleProps } from "./MenuIcon.types";

const StyledIcon = styled(AiOutlineMenu)<MenuIconStyleProps>`
  ${menuIconStyles}
`;

const StyledChevron = styled(FaChevronLeft)<MenuIconStyleProps>`
  ${menuIconStyles}
`;

export const MenuIcon: React.FC<MenuIconProps> = ({
  size,
  menutoggled,
  width,
  isMounted,
  onClick,
}) => {
  return (
    <>
      {menutoggled ? (
        <StyledChevron
          size={size}
          $menuToggled={menutoggled}
          $isMounted={isMounted}
          $width={width}
          onClick={onClick}
        />
      ) : (
        <StyledIcon
          size={size}
          $menuToggled={menutoggled}
          $isMounted={isMounted}
          $width={width}
          onClick={onClick}
        />
      )}
    </>
  );
};
