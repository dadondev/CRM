import styled from "styled-components";
import Container from "../../general/components/Container";
import HeroContent from "../../general/components/HeroContent";
import laptop from "../../general/utils/laptop";
import desktop from "../../general/utils/desktop";
import Part from "./components/Part";
import { useState } from "react";

const StyledContainer = styled(Container)``;

const ControllerSection = styled.div`
  margin-bottom: 50px;
  ${laptop} {
    margin-bottom: 100px;
  }
  ${desktop} {
    margin-bottom: 120px;
  }
`;

const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  ${laptop} {
    margin-top: 80px;
  }
  ${desktop} {
    margin-top: 100px;
  }
`;

const parts = [
  {
    name: "Introduction to UI/UX Design",
    steps: [
      {
        name: "Understanding UI/UX Design Principles",
        how: "45 Minutes",
      },
      {
        name: "Importance of User-Centered Design",
        how: "1 Hour",
      },
      {
        name: "The Role of UI/UX Design in Product Development",
        how: "45 Minustes",
      },
    ],
  },
  {
    name: "User Research and Analysis",
    steps: [
      {
        name: "Conducting User Research and Interviews",
        how: "1 Hour",
      },
      {
        name: "Analyzing User Needs and Behavior",
        how: "1 Hour",
      },
      {
        name: "Creating User Personas and Scenarios",
        how: "45 Minutes",
      },
    ],
  },
  {
    name: "Wireframing and Prototyping",
    steps: [
      {
        name: "Introduction to Wireframing Tools and Techniques",
        how: "1 Hour",
      },
      {
        name: "Creating Low-Fidelity Wireframes",
        how: "1 Hour",
      },
      {
        name: "Prototyping and Interactive Mockups",
        how: "1 Hour",
      },
    ],
  },
  {
    name: "Visual Design and Branding",
    steps: [
      {
        name: "Color Theory and Typography in UI Design",
        how: "1 Hour",
      },
      {
        name: "CVisual Hierarchy and Layout Design",
        how: "1 Hour",
      },
      {
        name: "Creating a Strong Brand Identity",
        how: "45 Minutes",
      },
    ],
  },
  {
    name: "Usability Testing and Iteration",
    steps: [
      {
        name: "Usability Testing Methods and Techniques",
        how: "1 Hour",
      },
      {
        name: "Analyzing Usability Test Results",
        how: "45 Minutes",
      },
      {
        name: "Iterating and Improving UX Designs",
        how: "45 Minutes",
      },
    ],
  },
];

const Course = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <StyledContainer>
      <HeroContent
        title="UI/UX Design Course"
        text="Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
      />
      <ControllerSection>
        <div>
          <img src="/cor-2-1.png" alt="hello" />
        </div>
        <Controllers>
          {parts.map((e, i) => (
            <Part
              active={active}
              setActive={setActive}
              index={i}
              name={e.name}
              steps={[...e.steps]}
            />
          ))}
        </Controllers>
      </ControllerSection>
    </StyledContainer>
  );
};

export default Course;
