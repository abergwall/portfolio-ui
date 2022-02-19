import React from "react";
import styled from "styled-components";
import { pageWrapperStyles } from "./PageWrapper.styles";
import { PageWrapperProps } from "./PageWrapper.types";

const StyledDiv = styled.div`
  ${pageWrapperStyles}
`;

export const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ children }, ref) => {
    return <StyledDiv ref={ref}>{children}</StyledDiv>;
  }
);
