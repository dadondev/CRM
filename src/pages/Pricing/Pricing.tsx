import styled from "styled-components";
import Container from "../../general/components/Container";
import HeroContent from "../../general/components/HeroContent";
import Plans from "../Home/components/Plans";
import Switcher from "../Home/components/Switcher";
import { useState } from "react";
import laptop from "../../general/utils/laptop";
import desktop from "../../general/utils/desktop";
import Faq from "../../general/components/Faq";

const Content = styled.div`
  margin-bottom: 50px;
  ${laptop} {
    margin-bottom: 100px;
  }
  ${desktop} {
    margin-bottom: 150px;
  }
`;

const StyledContainer = styled(Container)``;
const StyledPricing = () => {
  const [isLeft, setIsLeft] = useState<boolean>(false);
  return (
    <StyledContainer>
      <HeroContent
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        title="Our Pricings"
      />
      <Content>
        <Switcher isLeft={isLeft} setIsLeft={setIsLeft} />
        <Plans isLeft={isLeft} />
      </Content>
      <Faq />
    </StyledContainer>
  );
};

export default StyledPricing;
