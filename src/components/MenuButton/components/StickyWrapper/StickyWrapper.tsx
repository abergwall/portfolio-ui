import React from "react";
import styled from "styled-components";
import { stickyWrapperStyles } from "./StickyWrapper.styles";
import {
  StickyWrapperProps,
  StickyWrapperStyleProps,
} from "./StickyWrapper.types";

const StyledDiv = styled.div<StickyWrapperStyleProps>`
  ${stickyWrapperStyles}
`;

export const StickyWrapper: React.FC<StickyWrapperProps> = ({
  isSticky,
  children,
}) => {
  return <StyledDiv $isSticky={isSticky}>{children}</StyledDiv>;
};
