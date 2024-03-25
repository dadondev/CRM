import React from "react";
import styled from "styled-components";
interface ConI {
  isLeft: boolean;
}

interface Props {
  isLeft: boolean;
  setIsLeft: (a: boolean) => void;
}

const Container = styled.div<ConI>`
  margin: 0 auto;
  position: relative;
  width: 220px;
  display: flex;
  padding: 12px;
  height: 69px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    left: 12px;
    width: 100px;
    border-radius: 6px;
    position: absolute;
    height: 45px;
    transition: 500ms all;
    transform: ${(props) =>
      props.isLeft ? "translateX(100%)" : "translateX(0)"};
    background-color: ${(props) => props.theme.colors.orange};
  }
  & > span:nth-child(${(props) => (props.isLeft ? 2 : 1)}) {
    color: white !important;
  }
`;

const Span = styled.span`
  cursor: pointer;
  display: inline-flex;
  width: 103px;
  position: relative;
  z-index: 100;
  transition: 500ms all;
  justify-content: center;
  align-items: center;
  padding: 12px 27px;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray30};
`;
const Switcher: React.FC<Props> = ({ isLeft, setIsLeft }) => {
  const handleClick = (e: string) => {
    if (e === "left") {
      setIsLeft(false);
    } else {
      setIsLeft(true);
    }
  };
  return (
    <Container isLeft={isLeft}>
      <Span onClick={() => handleClick("left")}>Monthly</Span>
      <Span onClick={() => handleClick("right")}>Yearly</Span>
    </Container>
  );
};

export default Switcher;
