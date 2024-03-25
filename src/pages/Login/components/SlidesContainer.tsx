import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import { useState } from "react";
import desktop from "../../../general/utils/desktop";

interface Props {
  type: "slide" | "read";
}

const Container = styled.div`
  margin-bottom: 50px;
  & > div:nth-child(2) {
    padding-top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 10px;
    & > button {
      background-color: ${(p) => p.theme.colors.white};
    }
    ${laptop} {
      justify-content: end;
    }
  }
  ${laptop} {
    margin-bottom: 100px;
  }
  ${desktop} {
    margin-bottom: 150px;
  }
`;

const SlideBox = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  overflow: hidden;
  transition: 500ms all;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  padding: 30px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray30};

  ${laptop} {
    font-size: 1.6rem;
    padding: 40px;
  }
  ${desktop} {
    font-size: 1.8rem;
    padding: 50px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(p) => p.theme.colors.white99};
  padding: 20px 30px;
  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(p) => p.theme.colors.subTitle};
    & > img {
      max-width: 50px;
      border-radius: 6px;
    }
    ${desktop} {
      font-size: 1.8rem;
    }
  }
`;

const Btn = styled.button<Props>`
  padding: 14px 16px;
  background-color: ${(p) => p.theme.colors.white95};
  border-radius: 6px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray15};
  transition: 500ms all;
  &:hover {
    transform: translateY(-10px);
  }
  ${desktop} {
    padding: 18px 24px;
  }
`;

const comments = [
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Sarah L",
  },
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Yan",
  },
  {
    text: "The web design course salom provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Kyle",
  },
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Ulugbek",
  },
];

const SlidesContainer = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <Container>
      <SlideBox>
        <Paragraph>{comments[index].text}</Paragraph>
        <Footer>
          <span>
            <img src={"/avatar-" + (index + 1) + ".png"} alt="author" />
            {comments[index].author}
          </span>
          <Btn type="read">Read Full Story</Btn>
        </Footer>
      </SlideBox>
      <div>
        <Btn
          type="slide"
          onClick={() => {
            if (index - 1 >= 0) {
              setIndex(index - 1);
            } else {
              setIndex(comments.length - 1);
            }
          }}
        >
          <img src="/left.svg" alt="left" />
        </Btn>
        <Btn
          type="slide"
          onClick={() => {
            if (index + 1 <= comments.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }}
        >
          <img src="/right.svg" alt="right" />
        </Btn>
      </div>
    </Container>
  );
};

export default SlidesContainer;
