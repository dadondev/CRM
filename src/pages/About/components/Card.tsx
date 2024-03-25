import React from "react";
import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

interface CardInt {
  title: string;
  text: string;
  url: string;
}

const StyledCard = styled.div`
  transition: 500ms all;
  max-width: 358px;
  height: auto;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 10px;
  padding: 30px;
  ${laptop} {
    max-width: 450px;
    padding: 40px;
    height: 330px;
  }
  ${desktop} {
    max-width: 590px;
    padding: 50px;
    height: 390px;
  }
`;

const ImageContainer = styled.article`
  max-width: 56px;
  max-height: 56px;
  width: 100%;
  height: 100%;
  padding: 14px;
  background-color: ${(p) => p.theme.colors.orange97};
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.orange90};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${desktop} {
    max-width: 66px;
    max-height: 66px;
    padding: 16px;
  }
`;

const CardContent = styled.article``;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.gray15};
  ${laptop} {
    font-size: 2rem;
  }
  ${desktop} {
    font-size: 2.4rem;
  }
`;
const Text = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray35};
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const Card: React.FC<CardInt> = ({ text, title, url }) => {
  return (
    <StyledCard>
      <ImageContainer>
        <img src={url} alt="icon" />
      </ImageContainer>
      <CardContent>
        <SubTitle>{title}</SubTitle>
        <Text>{text}</Text>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
