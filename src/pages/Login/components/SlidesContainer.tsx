import styled from "styled-components";

const Container = styled.div``;

const SlideBox = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  padding: 30px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray30};
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
  }
`;

const Btn = styled.button`
  padding: 14px 16px;
  background-color: ${(p) => p.theme.colors.white95};
  border-radius: 6px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray15};
`;

const SlidesContainer = () => {
  return (
    <Container>
      <SlideBox>
        <Paragraph>
          The web design course provided a solid foundation for me. The
          instructors were knowledgeable and supportive, and the interactive
          learning environment was engaging. I highly recommend it!
        </Paragraph>
        <Footer>
          <span>
            <img src="/avatar-1.png" alt="" />
            Sarah L
          </span>
          <Btn>Read Full Story</Btn>
        </Footer>
      </SlideBox>
    </Container>
  );
};

export default SlidesContainer;
