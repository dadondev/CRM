import { Link } from "react-router-dom";
import styled from "styled-components";

const Ads = styled.article`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.orange};
  text-align: center;
  padding: 10px 0;
  border-radius: 6px;
  & > a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: ${(props) => props.theme.colors.white};
    /* -------------- */
    font-size: 1.4rem;
    @media (width>= 400px) {
      gap: 23px;
    }
    & > span {
      @media (width <=382px) {
        font-size: 1rem;
      }
    }
  }
  &:hover a > img {
    transform: translateX(5px);
  }
  & > a > img {
    width: 20px;
    transition: 500ms all;
  }
`;

const Advertisement = () => {
  return (
    <Ads>
      <Link to={"/courses"}>
        <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>

        <img src="/arrow.svg" alt="arrow" />
      </Link>
    </Ads>
  );
};

export default Advertisement;
