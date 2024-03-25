import styled from "styled-components";
import Quiz from "./Quiz";
import laptop from "../utils/laptop";
import desktop from "../utils/desktop";

const StyledContainer = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: ${(p) => p.theme.colors.white};
  margin-top: 50px;
  display: grid;
  margin-bottom: 50px;
  gap: 40px;
  ${laptop} {
    grid-template-columns: 408px 1fr;
    padding: 80px;
    gap: 100px;
    margin-top: 100px;
    margin-bottom: 100px;
    justify-content: space-between;
  }
  ${desktop} {
    margin-bottom: 142px;
    padding: 100px;
    margin-top: 150px;
  }
`;

const Article = styled.article``;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${(p) => p.theme.colors.gray15};
  ${laptop} {
    font-size: 3.8rem;
  }
  ${desktop} {
    font-size: 4.8rem;
    line-height: 5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray20};
  margin-bottom: 20px;
  ${laptop} {
    font-size: 1.8rem;
  }
`;

const Btn = styled.button`
  max-width: 130px;
  transition: 500ms all;
  width: 100%;
  padding: 14px 20px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.white95};
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray15};
  ${laptop} {
    font-size: 1.8rem;
    max-width: 164px;
  }
`;

const FaqCardsContainer = styled.div`
  display: grid;
  gap: 20px;
`;

let list = [
  "Can I enroll in multiple courses at once?",
  "What kind of support can I expect from instructors?",
  "Are the courses self-paced or do they have specific start and end dates?",
  " Are there any prerequisites for the courses?",
  "Can I download the course materials for offline access?",
];

const Faq = () => {
  return (
    <StyledContainer>
      <Article>
        <Title>Frequently Asked Questions</Title>
        <Paragraph>
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </Paragraph>
        <Btn>See All FAQ’s</Btn>
      </Article>
      <FaqCardsContainer>
        {list.map((e) => (
          <Quiz quiz={e} key={e} />
        ))}
      </FaqCardsContainer>
    </StyledContainer>
  );
};

export default Faq;
