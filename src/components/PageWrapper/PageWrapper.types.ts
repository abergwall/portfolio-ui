import React from "react";

export type PageWrapperProps = {
  children?: React.ReactNode;
};

export type PageWrapperComponent =
  React.ForwardRefExoticComponent<PageWrapperProps>;
