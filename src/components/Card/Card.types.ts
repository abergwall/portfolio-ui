export type CardProps = {
  children?: React.ReactNode;
  title?: string;
  height?: number;
  width?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
};

export type CardStyleProps = {
  $height: number;
  $width: number;
  $borderColor: string;
  $backgroundColor: string;
  $color: string;
  $className?: string;
};
