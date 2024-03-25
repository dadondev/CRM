import styled from "styled-components";
import Title from "./Title";
import Card from "./Card";
import Paragraph from "./Paragraph";
import desktop from "../../../general/utils/desktop";
import laptop from "../../../general/utils/laptop";
const CardsContainer = styled.div`
  margin: 50px 0;
  ${laptop} {
    margin: 80px 0 50px 0;
  }
  ${desktop} {
    margin: 100px 0 50px;
  }
`;

const CardsContent = styled.article`
  width: 100%;
  margin-bottom: 50px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const info = [
  {
    text: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    title: "Trusted by Thousands",
  },
  {
    title: "Award-Winning Courses",
    text: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    title: "Positive Student Feedback",
    text: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    title: "Industry Partnerships",
    text: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
  },
];

const inFO = [
  {
    text: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    title: "Provide Practical Skills",
  },
  {
    title: "Promote Collaboration and Community",
    text: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    title: "Foster Creative Problem-Solving",
    text: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    title: "Stay Ahead of the Curve",
    text: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

const Main = () => {
  return (
    <>
      <CardsContainer>
        <CardsContent>
          <Title>Achievements</Title>
          <Paragraph children="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements" />
        </CardsContent>
        <Cards>
          {info.map((e, i) => (
            <Card
              title={e.title}
              key={e.text}
              text={e.text}
              url={"/about-" + (i + 1) + ".svg"}
            />
          ))}
        </Cards>
      </CardsContainer>
      <CardsContainer>
        <CardsContent>
          <Title>Our Goals</Title>
          <Paragraph
            children="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
Through our carefully crafted courses, we aim to"
          />
        </CardsContent>
        <Cards>
          {inFO.map((e, i) => (
            <Card
              title={e.title}
              key={e.text}
              text={e.text}
              url={"/ab-" + (i + 1) + ".svg"}
            />
          ))}
        </Cards>
      </CardsContainer>
    </>
  );
};

export default Main;
