import styled from "styled-components";
import Switcher from "./Switcher";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import { useState } from "react";
import Plans from "./Plans";

const Content = styled.div`
  display: grid;
  margin-top: 50px;

  ${laptop} {
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: end;
    margin-top: 100px;
    gap: 20px;
  }
  ${desktop} {
    margin-top: 150px;
  }
`;

const Container = styled.article`
  display: grid;
  gap: 4px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray15};
  font-weight: 600;
  font-size: 2.8rem;

  ${laptop} {
    font-size: 3.8rem;
  }
  ${desktop} {
    font-size: 4.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray35};
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const Pricing = () => {
  const [isLeft, setIsLeft] = useState(false);
  return (
    <>
      <Content>
        <Container>
          <Title>Our Pricing</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Paragraph>
        </Container>
        <Switcher isLeft={isLeft} setIsLeft={setIsLeft} />
      </Content>
      <Plans isLeft={isLeft} />
    </>
  );
};

export default Pricing;
