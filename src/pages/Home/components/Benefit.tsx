import styled from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";
import ContentSection from "../../../general/components/ContentSection";

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  & > img {
    min-width: 100%;
  }
  margin-bottom: 40px;

  ${laptop} {
    margin-top: 80px;
    margin-bottom: 60px;
  }
  ${desktop} {
    margin-top: 100px;
    margin-bottom: 80px;
  }
`;

const Benefit = () => {
  return (
    <Container>
      <img src="/video.png" alt="video" />
      <ContentSection
        title="Benefits"
        text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
    </Container>
  );
};

export default Benefit;
