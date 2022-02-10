import React from "react";
import styled from "styled-components";
import { ContainerProps } from "./Container.types";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children }, ref) => {
    return <StyledDiv ref={ref}>{children}</StyledDiv>;
  }
);
