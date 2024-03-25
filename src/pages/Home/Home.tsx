import styled from "styled-components";
import laptop from "../../general/utils/laptop";
import Container from "../../general/components/Container";
import Hero from "./components/Hero";
import Benefit from "./components/Benefit";
import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Testim from "./components/Testim";
import Pricing from "./components/Pricing";
import Faq from "../../general/components/Faq";

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 50px;
  ${laptop} {
    padding-top: 100px;
  }
`;

const StyledContainer = styled(Container)``;

const Home = () => {
  return (
    <StyledHome>
      <StyledContainer>
        <Hero />
        <Benefit />
        <Cards />
        <Courses />
        <Testim />
        <Pricing />
        <Faq />
      </StyledContainer>
    </StyledHome>
  );
};

export default Home;
