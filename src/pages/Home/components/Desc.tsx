import styled from "styled-components";
import ReadBtn from "./ReadBtn.";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import React from "react";

interface Props {
  text: string;
  author: string;
  url: string;
}

const Card = styled.div`
  transition: 500ms all;
  /* - */
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white95};
  max-width: 357px;
  display: grid;
  grid-template-rows: 165px;
  margin: 0 auto;
  & > div {
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;

    & > span {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      gap: 10px;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.subTitle};
      & > img {
        width: 50px;
        border-radius: 6px;
      }
    }
  }

  ${laptop} {
    max-width: none;
    flex-basis: 48%;
    grid-template-rows: 165px;
    & > div {
      padding: 24px 40px;
    }
  }

  ${desktop} {
    grid-template-rows: 182px;
    /* max-width: 422px; */
  }
`;

const Article = styled.article`
  padding: 30px;
  & > p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.gray30};
  }
  border-bottom: 1px solid ${(props) => props.theme.colors.white95};

  ${laptop} {
    padding: 40px;
    & > p {
      font-size: 1.6rem;
    }
  }
`;

const Desc: React.FC<Props> = ({ text, author, url }) => {
  return (
    <Card>
      <Article>
        <p>{text}</p>
      </Article>
      <div>
        <span>
          <img src={url} alt="avatar" />
          {author}
        </span>
        <ReadBtn />
      </div>
    </Card>
  );
};

export default Desc;
