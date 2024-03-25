import styled from "styled-components";
import Container from "../../general/components/Container";
import HeroContent from "../../general/components/HeroContent";
import CourseCard from "./components/CourseCard";
import laptop from "../../general/utils/laptop";
import desktop from "../../general/utils/desktop";

const StyledContainer = styled(Container)`
  height: 100%;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
  ${laptop} {
    margin-bottom: 100px;
  }
  ${desktop} {
    margin-bottom: 150px;
  }
`;

const Courses = () => {
  return (
    <StyledContainer>
      <HeroContent
        title="Online Courses on Design and Development"
        text="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />

      <CoursesContainer>
        <CourseCard />
        <CourseCard />
      </CoursesContainer>
    </StyledContainer>
  );
};

export default Courses;
