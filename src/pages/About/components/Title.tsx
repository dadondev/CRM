import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import React from "react";

const Str = styled.h1`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.gray20};
  ${laptop} {
    font-size: 3rem;
  }
  ${desktop} {
    font-size: 4.8rem;
  }
`;

const Title = (p: { children: React.ReactNode }) => {
  return <Str>{p.children}</Str>;
};

export default Title;
