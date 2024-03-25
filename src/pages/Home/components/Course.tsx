import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import React from "react";

interface Props {
  url: string;
  date: string;
  level: string;
  author: string;
  title: string;
  text: string;
}

const CourseContainer = styled.div`
  transition: 500ms all;
  max-width: 357px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  & > img {
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  ${laptop} {
    flex-basis: 45%;
    max-width: 100%;
    /* max-width: 480px; */
    & > img {
      width: 100%;
      height: 266px;
    }
  }
  ${desktop} {
    /* max-width: 550px; */
  }
`;

const DateInfo = styled.article`
  display: grid;
  grid-template-rows: 34px;
  row-gap: 14px;

  & > div {
    display: flex;
    gap: 10px;
  }
  margin-bottom: 24px;

  ${laptop} {
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-template-rows: 1fr;
  }
`;

const Badge = styled.p`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.gray30};
  font-size: 1.4rem;
  text-transform: capitalize;
`;

const Author = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.gray15};
`;

const CourseInfo = styled.article`
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.gray15};

  ${laptop} {
    font-size: 2rem;
  }
  ${desktop} {
    font-size: 2.4rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray30};

  ${laptop} {
    min-height: 120px;
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const GetBtn = styled.button`
  width: 100%;
  text-align: center;
  padding-block: 14px;
  background-color: ${(props) => props.theme.colors.white97};
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray15};
  transition: 500ms all;

  &:hover {
    opacity: 0.7;
  }
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const Course: React.FC<Props> = ({ author, date, level, text, title, url }) => {
  return (
    <CourseContainer>
      <img src={url} alt={url} />

      <DateInfo>
        <div>
          <Badge>{date}</Badge>
          <Badge>{level}</Badge>
        </div>

        <Author>{author}</Author>
      </DateInfo>
      <CourseInfo>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </CourseInfo>
      <GetBtn>Get it Now</GetBtn>
    </CourseContainer>
  );
};

export default Course;
