import React from "react";
import styled from "styled-components";
import { Row } from "../LayoutComponents";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const StyledDiv = styled.div`
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border-radius: 40px;
  border: #F58800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-style: solid;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  background-color: #ffffff;
  color: #1a4645;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
      -5px -5px 30px 15px rgba(0,0,0,0.22);
`;

export type CardProps = {
  children?: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children }, ref) => {
    return (
      <StyledDiv ref={ref}>
        {children}
        <Row>
          <AiFillLinkedin />
        </Row>
        <Row>
          <AiFillGithub />
        </Row>
        <FaDiscord />
      </StyledDiv>
    );
  }
);
