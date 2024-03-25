import styled, { css } from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

interface Props {
  isLast: boolean;
}
import Btn from "./Btn";

const StyledHero = styled.div``;

const Content = styled.div`
  margin-bottom: 30px;
`;

const PatternSection = styled.div`
  transition: 500ms all;
  position: relative;
  max-width: 357px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 14px;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 16px;

  & > img {
    width: 48px;
  }

  ${laptop} {
    max-width: 657px;
    margin-bottom: 16px;
  }

  ${desktop} {
    max-width: 854px;
    margin-bottom: 20px;
    & > img {
      width: 62px;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray};
  & > span {
    color: ${(props) => props.theme.colors.orange};
  }
  ${laptop} {
    font-size: 3.6rem;
  }
  ${desktop} {
    font-size: 4.8rem;
  }
`;
const Img = styled.img`
  position: absolute;
  width: 39px;
  top: 0;
  left: 0;
  transform: translate(-35px, -35px);
`;

const StyledContent = styled.div`
  text-align: center;
  transition: 500ms all;
  margin: 0 auto;
  max-width: 357px;
  margin-bottom: 50px;
  color: ${(props) => props.theme.colors.gray15};
  ${laptop} {
    max-width: 657px;
    & > h3 {
      font-size: 2.8rem;
    }
    & > p {
      font-size: 1.6rem;
    }
  }

  ${desktop} {
    max-width: 854px;
    & > h3 {
      font-size: 3.8rem;
    }
    & > p {
      font-size: 1.8rem;
    }
  }
  & > h3 {
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin-bottom: 6px;
  }
  & > p {
    font-size: 1.4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const Ads = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: ${(props) => props.theme.colors.orange} white;
`;

const Div = styled.div<Props>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12.2rem;
  padding: 20px 32px;
  ${(props) => {
    if (!props.isLast) {
      return css`
        border-right: 2px solid ${(props) => props.theme.colors.lightGray};
      `;
    }
  }}
  & > img {
    width: 70px;
  }
`;

const urls = ["logo-", "logo-", "logo-", "logo-", "logo-", "logo-", "logo-"];

const Hero = () => {
  return (
    <StyledHero>
      <Content>
        <PatternSection>
          <Img src="/pattern.svg" alt="pattern" />
          <img src="/energy.svg" alt="energy" />
          <Title>
            <span>Unlock </span>
            Your Creative Potential
          </Title>
        </PatternSection>

        <StyledContent>
          <h3>with Online Design and Development Courses.</h3>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </StyledContent>

        <Buttons>
          <Btn type="orange">Explore Courses</Btn>
          <Btn type="basic">View Pricing</Btn>
        </Buttons>
      </Content>
      <Ads>
        {urls.map((e, i) => (
          <Div isLast={i == urls.length - 1}>
            <img src={`/${e + (i + 1)}.svg`} alt="logo" />
          </Div>
        ))}
      </Ads>
    </StyledHero>
  );
};

export default Hero;
