import React from "react";

export type MenuIconProps = {
  menutoggled: boolean;
  isMounted: boolean;
  size: number;
  width: number;
  onClick: React.MouseEventHandler<SVGElement>;
};

export type MenuIconStyleProps = {
  $menuToggled: boolean;
  $isMounted: boolean;
  $width: number;
};
