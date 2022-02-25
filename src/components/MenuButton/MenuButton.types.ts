import React from "react";

export type MenuButtonProps = {
  isSticky?: boolean;
  className?: string;
  backgroundColor?: string;
  menuIconSize?: number;
  height?: number;
  width?: number;
  children?: React.ReactNode;
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
