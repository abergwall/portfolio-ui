import React from "react";
import styled from "styled-components";
import { roundImageStyles } from "./RoundImage.styles";
import { RoundImageProps } from "./RoundImage.types";

const StyledImg = styled.img<{ $height: number }>`
  ${roundImageStyles}
`;

export const RoundImage: React.FC<RoundImageProps> = ({
  imageSource = process.env.PUBLIC_URL + "/avatar.png",
  height = 200,
}) => {
  return <StyledImg $height={height} alt="test" src={imageSource} />;
};
