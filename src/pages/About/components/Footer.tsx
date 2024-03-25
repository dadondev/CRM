import styled from "styled-components";
import Paragraph from "./Paragraph";
import Title from "./Title";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

const Container = styled.div`
  padding: 80px;
  background-color: ${(p) => p.theme.colors.white};
  background-image: url("/bg-image.png");
  background-repeat: no-repeat;
  border-radius: 10px;
  background-position: bottom 0 right 0;
  ${laptop} {
    background-position: top 50% right 193px;
  }

  ${laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Content = styled.article`
  max-width: 100%;
  ${laptop} {
    max-width: 700px;
  }
  ${desktop} {
    max-width: 1008px;
  }
`;
const Span = styled.span`
  color: ${(p) => p.theme.colors.orange50};
`;

const Btn = styled.button`
  transition: 500ms all;
  padding: 14px 20px;
  font-size: 1.4rem;
  border-radius: 6px;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.orange50};
  margin-top: 40px;
  ${laptop} {
    font-size: 1.4rem;
    margin-top: 0;
    &:hover {
      opacity: 0.7;
    }
  }
  ${desktop} {
    font-size: 1.8rem;
    padding: 18px 24px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Title>
          <Span>Together,</Span>
          let's shape the future of digital innovation
        </Title>
        <Paragraph>
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </Paragraph>
      </Content>
      <Btn>Join Now</Btn>
    </Container>
  );
};

export default Footer;
