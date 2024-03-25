import styled, { css } from "styled-components";
import desktop from "../utils/desktop";
import laptop from "../utils/laptop";
import ViewAllBtn from "./ViewAllBtn";

interface Props {
  title: string;
  text: string;
  className?: string;
  type: "mbig" | "msmall";
}

interface ContentI {
  type: "mbig" | "msmall";
}

const Content = styled.article<ContentI>`
  padding-inline: 10px;

  ${(props) => {
    if (props.type == "msmall") {
      return css`
        margin-bottom: 40px;
        ${laptop} {
          margin-bottom: 60px;
        }
        ${desktop} {
          margin-bottom: 80px;
        }
      `;
    } else {
      return css`
        margin-top: 50px;
        ${laptop} {
          margin-top: 100px;
        }
        ${desktop} {
          margin-top: 150px;
        }
      `;
    }
  }}
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray15};
  font-size: 2.8rem;

  ${laptop} {
    font-size: 3.8rem;
  }
  ${desktop} {
    font-size: 4.8rem;
  }
`;
const P = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  color: ${(props) => props.theme.colors.gray35};
  font-size: 1.4rem;

  ${laptop} {
    font-size: 1.6rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & > span {
      flex-grow: 1;
    }
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const ContentSection: React.FC<Props> = ({ title, text, className, type }) => {
  return (
    <Content type={type} className={className}>
      <Title>{title}</Title>
      <P>
        <span>{text}</span>
        <ViewAllBtn>View All</ViewAllBtn>
      </P>
    </Content>
  );
};

export default ContentSection;
