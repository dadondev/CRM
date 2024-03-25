import styled from "styled-components";
import laptop from "../utils/laptop";
import desktop from "../utils/desktop";
import React from "react";

interface ContentInt {
  title: string;
  text: string;
}

const Content = styled.article`
  margin: 50px 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.white90};
  padding-bottom: 40px;
  ${laptop} {
    display: flex;
    align-items: start;
    gap: 80px;
    margin: 80px 0;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.gray15};
  margin-bottom: 16px;

  ${laptop} {
    font-size: 3.8rem;
    margin-bottom: 0;
    flex-basis: 45%;
  }

  ${desktop} {
    font-size: 4.8rem;
    max-width: 748px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray35};

  ${laptop} {
    font-size: 1.6rem;
    flex-basis: 45%;
  }

  ${desktop} {
    font-size: 1.8rem;
  }
`;

const HeroContent: React.FC<ContentInt> = ({ title, text }) => {
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </Content>
  );
};

export default HeroContent;
