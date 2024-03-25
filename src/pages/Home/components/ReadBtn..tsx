import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.white97};
  border-radius: 6px;
  padding: 14px 16px;
  border: 1px solid ${(props) => props.theme.colors.white95};
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white15};
`;
interface Props {
  onClick?: () => void;
}

const ReadBtn: React.FC<Props> = ({ onClick }) => {
  return <Btn onClick={onClick}>Read Full Story</Btn>;
};

export default ReadBtn;
