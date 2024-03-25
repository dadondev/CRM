import React from "react";
import styled from "styled-components";
import laptop from "../utils/laptop";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding-inline: 16px;

  ${laptop} {
    max-width: 1000px;
    margin: 0 auto;
    padding-inline: 0;
  }
  @media (width>=1400px) {
    max-width: 1400px;
  }
`;

const Container: React.FC<Props> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
