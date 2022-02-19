import React from "react";
import styled from "styled-components";
import { roundImageStyles } from "./RoundImage.styles";
import { RoundImageProps } from "./RoundImage.types";
import avatar from "../../assets/avatar.png";

const StyledImg = styled.img<{ $height: number }>`
  ${roundImageStyles}
`;

export const RoundImage: React.FC<RoundImageProps> = ({
  imageSource = avatar,
  height = 200,
}) => {
  return (
    <>
      <StyledImg $height={height} alt="test" src={imageSource} />
    </>
  );
};
