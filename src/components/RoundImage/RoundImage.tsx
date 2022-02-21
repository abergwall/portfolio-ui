import React from "react";
import styled from "styled-components";
import { roundImageStyles } from "./RoundImage.styles";
import { RoundImageProps } from "./RoundImage.types";
import avatar from "../../assets/avatar.png";

const StyledImg = styled.img<{ $height: number; $width?: number }>`
  ${roundImageStyles}
`;

export const RoundImage: React.FC<RoundImageProps> = ({
  imageSource = avatar,
  height = 200,
  width,
}) => {
  return (
    <>
      <StyledImg $height={height} $width={width} alt="test" src={imageSource} />
    </>
  );
};
