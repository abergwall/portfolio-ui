import React from "react";
import styled from "styled-components";
import { pageWrapperStyles } from "./PageWrapper.styles";
import { PageWrapperProps } from "./PageWrapper.types";

const StyledDiv = styled.div<{ $className?: string }>`
  ${pageWrapperStyles}
  ${(parameter) => parameter.$className ?? null}
`;

export const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ children, className }, ref) => {
    return (
      <StyledDiv ref={ref} $className={className}>
        {children}
      </StyledDiv>
    );
  }
);
