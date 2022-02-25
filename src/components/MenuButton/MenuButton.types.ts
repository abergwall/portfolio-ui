import React, { Ref, RefObject } from "react";

export type MenuButtonProps = {
  isSticky?: boolean;
  className?: string;
  backgroundColor?: string;
  menuIconSize?: number;
  height?: number;
  width?: number;
  children?: React.ReactNode;
  refs?: {
    scrollRef: RefObject<any>;
    styleRef?: React.ForwardedRef<HTMLDivElement>;
  };
};

export type MenuButtonStyleProps = {
  $toggled: boolean;
  $isMounted: boolean;
  $className?: string;
  $backgroundColor?: string;
  $height: number;
  $width: number;
};

export type IconStyleProps = { $toggled: boolean };
