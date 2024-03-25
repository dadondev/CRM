import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  num: number;
  title: string;
  text: string;
}

const CardContainer = styled.div`
  transition: 500ms all;
  padding: 30px;
  display: grid;
  gap: 30px;
  max-width: 358px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;

  ${laptop} {
    max-width: 413px;
    gap: 20px;
    padding: 20px;
  }
  ${desktop} {
    max-width: 430px;
  }
`;

const Title = styled.h1`
  text-align: right;
  font-size: 5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray15};

  ${laptop} {
    font-size: 6rem;
  }
  ${desktop} {
    font-size: 8rem;
  }
`;

const Content = styled.article``;

const SubTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.subTitle};
  margin-bottom: 10px;

  ${laptop} {
    font-size: 2rem;
  }
  ${desktop} {
    font-size: 2.4rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray30};
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const Button = styled.button`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white99};
  border-radius: 6px;
  margin-left: auto;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  transition: 500ms all;
  & > img {
    transition: 500ms all;
  }
  &:hover img {
    transform: translate(8px, -8px);
  }

  ${laptop} {
    width: 54px;
    height: 54px;
    & > img {
      width: 18px;
    }
  }

  ${laptop} {
    width: 74px;
    height: 74px;
    & > img {
      width: 23px;
    }
  }
`;

const Card: React.FC<Props> = ({ num, title, text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/courses");
  };
  return (
    <CardContainer>
      <Title>0{num}</Title>
      <Content>
        <SubTitle>{title}</SubTitle>
        <Paragraph>{text}</Paragraph>
      </Content>
      <Button onClick={handleClick}>
        <img src="/topArrow.svg" alt="arrow" />
      </Button>
    </CardContainer>
  );
};

export default Card;
