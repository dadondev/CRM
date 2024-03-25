import React from "react";
import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

const StyledText = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray35};
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const Paragraph = (p: { children: React.ReactNode }) => {
  return <StyledText>{p.children}</StyledText>;
};

export default Paragraph;
