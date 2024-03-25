import styled from "styled-components";
import Container from "../../general/components/Container";
import HeroContent from "../../general/components/HeroContent";
import Main from "./components/Main";
import Footer from "./components/Footer";

const StyledContainer = styled(Container)`
  height: 100%;
  margin-bottom: 100px;
`;

const About = () => {
  return (
    <StyledContainer>
      <HeroContent
        title="About Skillbridge"
        text="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />

      <Main />
      <Footer />
    </StyledContainer>
  );
};

export default About;
