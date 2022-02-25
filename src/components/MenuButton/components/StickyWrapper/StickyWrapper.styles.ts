import { css } from "styled-components";
import { StickyWrapperStyleProps } from "./StickyWrapper.types";

export const stickyWrapperStyles = css<StickyWrapperStyleProps>`
  ${(parameter) =>
    parameter.$isSticky
      ? `
    top: 0;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 200px;
`
      : null}
`;
