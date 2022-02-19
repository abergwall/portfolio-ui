import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

type RowProp = {
  children?: React.ReactNode;
};
export const Column: React.FC<RowProp> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
