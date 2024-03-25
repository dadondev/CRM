import styled from "styled-components";
import Card from "./Card";
import laptop from "../../../general/utils/laptop";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  ${laptop} {
    margin-bottom: 100px;
  }
`;

const info = [
  {
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    title: "Expert Instruction",
    text: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    title: "Diverse Course Offerings",
    text: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    title: "Updated Curriculum",
    text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    title: "Practical Projects and Assignments",
    text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    title: "Interactive Learning Environment",
    text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const Cards = () => {
  return (
    <CardsContainer>
      {info.map((e, i) => (
        <Card num={i + 1} key={e.text} title={e.title} text={e.text} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
