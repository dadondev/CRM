import React from "react";
import styled, { css } from "styled-components";
interface BtnInter {
  type: "orange" | "basic";
}

const StyledBtn = styled.button<BtnInter>`
  padding: 14px 20px;
  border: none;
  font-size: 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 500ms all;
  &:hover {
    opacity: 0.8;
  }
  ${(props) => {
    if (props.type === "basic") {
      return css`
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.gray15};
      `;
    } else {
      return css`
        background-color: ${(props) => props.theme.colors.orange};
        color: ${(props) => props.theme.colors.white};
      `;
    }
  }};
`;
const Btn = (props: {
  type: "basic" | "orange";
  children: React.ReactNode;
}) => {
  return <StyledBtn type={props.type}>{props.children}</StyledBtn>;
};

export default Btn;
