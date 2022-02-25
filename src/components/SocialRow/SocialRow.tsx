import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { Row, Container } from "..";
import { SocialRowProps } from "./SocialRow.types";

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  transition: transform 500ms;
  padding: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SocialRow: React.FC<SocialRowProps> = ({
  theme = "light",
  size = 40,
  ...props
}) => {
  const iconColor = theme === "light" ? "#FFFFFF" : "inherit";
  return (
    <Container>
      <Row>
        {props.linkedIn && (
          <StyledAnchor href={props.linkedIn.link} target="_blank">
            <AiFillLinkedin color={iconColor} size={size} />
          </StyledAnchor>
        )}
        {props.email && (
          <StyledAnchor href={props.email.link} target="_blank">
            <AiOutlineMail color={iconColor} size={size} />
          </StyledAnchor>
        )}
        {props.github && (
          <StyledAnchor href={props.github.link} target="_blank">
            <AiFillGithub color={iconColor} size={size} />
          </StyledAnchor>
        )}
      </Row>
    </Container>
  );
};
