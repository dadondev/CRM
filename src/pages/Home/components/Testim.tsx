import styled from "styled-components";
import ContentSection from "../../../general/components/ContentSection";
import Desc from "./Desc";
import desktop from "../../../general/utils/desktop";

const Container = styled.div``;

const Content = styled(ContentSection)``;

const Descriptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  ${desktop} {
    gap: 30px;
  }
`;

const descs = [
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    url: "/avatar-",
    author: "Sarah L",
  },
  {
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    author: "Jason M",
    url: "/avatar-",
  },
  {
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    url: "/avatar-",
    author: "Emily R",
  },
  {
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    url: "/avatar-",
    author: "Michael K",
  },
];

const Testim = () => {
  return (
    <Container>
      <Content
        type="msmall"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        title="Our Testimonials"
      />

      <Descriptions>
        {descs.map((e, i) => (
          <Desc
            key={i}
            text={e.text}
            author={e.author}
            url={e.url + (i + 1) + ".png"}
          />
        ))}
      </Descriptions>
    </Container>
  );
};

export default Testim;
