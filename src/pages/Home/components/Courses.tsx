import styled from "styled-components";
import ContentSection from "../../../general/components/ContentSection";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import Course from "./Course";

const Container = styled.div`
  transition: 500ms all;
  margin-bottom: 50px;
  ${laptop} {
    margin-bottom: 100px;
  }
  ${desktop} {
    margin-bottom: 108px;
  }
`;

const CoursesContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const courses = [
  {
    url: "/course-1.png",
    title: "Web Design Fundamentals",
    text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    author: "By John Smith",
    level: "Beginner",
    date: "4 weeks",
  },
  {
    url: "/course-2.png",
    title: "UI/UX Design",
    text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    author: "By John Doe",
    level: "Intermediate",
    date: "6 weeks",
  },
  {
    url: "/course-3.png",
    title: "Mobile App Development",
    text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    author: "By David Brown",
    level: "Intermediate",
    date: "8 weeks",
  },
  {
    url: "/course-4.png",
    title: "Graphic Design for Beginners",
    text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    author: "By Sarah Thompson",
    level: "Beginner",
    date: "10 weeks",
  },
  {
    url: "/course-5.png",
    title: "Front-End Web Development",
    text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    author: "By Michael Adams",
    level: "Intermediate",
    date: "10 weeks",
  },
  {
    url: "/course-6.png",
    title: "Advanced JavaScript",
    text: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    author: "By Jennifer Wilson",
    level: "Advance",
    date: "6 weeks",
  },
];
const Courses = () => {
  return (
    <Container>
      <ContentSection
        type="msmall"
        title="Our Courses"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <CoursesContainer>
        {courses.map((e, i) => (
          <Course
            key={i}
            url={e.url}
            title={e.title}
            text={e.text}
            level={e.level}
            date={e.date}
            author={e.author}
          />
        ))}
      </CoursesContainer>
    </Container>
  );
};

export default Courses;
