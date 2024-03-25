import styled from "styled-components";
import desktop from "../../../general/utils/desktop";
import laptop from "../../../general/utils/laptop";

const Heading = styled.article`
  margin-bottom: 40px;
  ${laptop} {
    margin-bottom: 60px;
  }
  ${desktop} {
    margin-bottom: 80px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${(p) => p.theme.colors.gray15};
  font-weight: 600;
  ${laptop} {
    font-size: 3rem;
  }
  ${desktop} {
    font-size: 3.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray30};
`;

const StyledHeading = () => {
  return (
    <Heading>
      <Title>Students Testimonials</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </Paragraph>
    </Heading>
  );
};

export default StyledHeading;
