import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

interface IsLatest {
  islast: boolean;
}

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 8px;
  padding: 24px;
  ${laptop} {
    padding: 40px;
  }
`;

const Heading = styled.article`
  margin-bottom: 24px;
  ${laptop} {
    display: flex;
    align-items: center;
  }
  ${desktop} {
    margin-bottom: 30px;
  }
`;

const CourseName = styled.h3`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.gray15};
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const CourseP = styled.p`
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.gray30};
  ${laptop} {
    margin-bottom: 0;
  }
`;

const ViewCourse = styled.button`
  flex-basis: 20%;
  max-width: 150px;
  padding: 14px 16px;
  font-size: 1.4rem;
  border-radius: 6px;
  color: ${(p) => p.theme.colors.gray15};
  border: 1px solid ${(p) => p.theme.colors.white95};
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  & > img {
    max-width: 20vw;
    border-radius: 4px;
    ${laptop} {
      max-width: 290px;
      object-fit: contain;
    }
    ${desktop} {
      max-width: 490px;
    }
  }
  ${laptop} {
    gap: 20px;
  }
`;
const DateInfo = styled.article`
  display: grid;
  grid-template-rows: 34px;
  row-gap: 14px;
  margin-bottom: 40px;

  & > div {
    display: flex;
    gap: 10px;
  }
  margin-bottom: 24px;

  ${laptop} {
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-template-rows: 1fr;
  }
`;

const Badge = styled.p`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.gray30};
  font-size: 1.4rem;
  text-transform: capitalize;
`;

const Author = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.gray15};
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-rows: 52px 1fr;
  border: 1px solid ${(p) => p.theme.colors.white95};
  border-radius: 10px;
  & > h1 {
    padding: 14px 20px;
    border-bottom: 1px solid ${(p) => p.theme.colors.white95};
    height: 100%;
    font-size: 1.6rem;
    color: ${(p) => p.theme.colors.gray15};
    ${laptop} {
      font-size: 1.8rem;
    }
  }
`;

const Steps = styled.div`
  padding: 24px;
  display: grid;
  ${laptop} {
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }
`;

const Step = styled.article<IsLatest>`
  padding-bottom: ${(p) => (p.islast ? "0" : "20px")};
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.gray15};
  border-bottom: 1px solid
    ${(p) => (p.islast ? "white" : p.theme.colors.white95)};

  ${laptop} {
    padding-bottom: 0;
    border-bottom: none;
    padding-right: ${(p) => (p.islast ? "0" : "30px")};
    border-right: 1px solid
      ${(p) => (p.islast ? "white" : p.theme.colors.white95)};
  }

  ${desktop} {
    padding-right: ${(p) => (p.islast ? "0" : "100px")};
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  ${laptop} {
    font-size: 4rem;
  }
  ${desktop} {
    font-size: 5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  ${laptop} {
    font-size: 1.6rem;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const CourseCard = () => {
  return (
    <Container>
      <Heading>
        <div>
          <CourseName>Web Design Fundamentals</CourseName>
          <CourseP>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </CourseP>
        </div>
        <ViewCourse>View Course</ViewCourse>
      </Heading>
      <Main>
        {Array(3)
          .fill(0)
          .map((e, i) => (
            <img src={"/cor-" + (i + 1) + ".png"} alt="hello" key={e + 1} />
          ))}
      </Main>
      <DateInfo>
        <div>
          <Badge>4 Weeks</Badge>
          <Badge>Beginner</Badge>
        </div>

        <Author>John Doe</Author>
      </DateInfo>
      <StepsContainer>
        <h1>Curriculum</h1>

        <Steps>
          <Step islast={false}>
            <Title>01</Title>
            <Paragraph>Introduction to HTML</Paragraph>
          </Step>
          <Step islast={false}>
            <Title>02</Title>
            <Paragraph>Introduction to HTML</Paragraph>
          </Step>
          <Step islast={false}>
            <Title>03</Title>
            <Paragraph>Introduction to HTML</Paragraph>
          </Step>
          <Step islast={!true}>
            <Title>04</Title>
            <Paragraph>Introduction to HTML</Paragraph>
          </Step>
          <Step islast={true}>
            <Title>05</Title>
            <Paragraph>Introduction to HTML</Paragraph>
          </Step>
        </Steps>
      </StepsContainer>
    </Container>
  );
};

export default CourseCard;
