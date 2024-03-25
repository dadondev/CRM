import styled from "styled-components";
import Container from "./Container";
import laptop from "../utils/laptop";
import { Link } from "react-router-dom";
import desktop from "../utils/desktop";
const StyledFooter = styled.footer`
  background-color: ${(p) => p.theme.colors.white};
`;

const StyledContainer = styled(Container)`
  padding: 50px 20px;

  ${laptop} {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
`;

const LeftColumn = styled.div`
  color: ${(p) => p.theme.colors.gray15};
  font-size: 1.5rem;
  margin-bottom: 24px;
  ${laptop} {
    margin-bottom: 0;
  }
  & > img {
    margin-bottom: 30px;
  }
  & > ul {
    display: grid;
    gap: 10px;
    list-style: none;
    padding: 0;
    & > li {
      display: grid;
      grid-template-columns: 20px auto;
      gap: 5px;
      align-items: center;
    }
  }
  ${laptop} {
    font-size: 1.6rem;
  }

  ${desktop} {
    font-size: 1.8rem;
  }
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: auto;
  column-gap: 20px;
  grid-template-rows: 1fr;
  justify-content: center;
  row-gap: 24px;

  @media (width>= 600px) {
    align-items: start;
    gap: 60px;
    grid-template-columns: auto auto;
  }

  & > div:nth-child(2) > h3 {
    margin-bottom: 15px;
    color: ${(p) => p.theme.colors.gray15};
    font-size: 1.8rem;
    ${desktop} {
      font-size: 2rem;
    }
  }
  & > div:nth-child(2) > div {
    display: flex;
    align-items: center;
    gap: 10px;
    & > a {
      transition: 500ms all;
    }
    & > a:hover {
      transform: translateY(-10px);
    }
  }

  ${laptop} {
    /* font-size: 1.6rem; */
  }

  ${desktop} {
    font-size: 1.8rem;
  }
`;

const ListList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > ul {
    display: grid;
    max-width: 140px;
    gap: 4px;
    & > b {
      font-size: 1.8rem;
      color: ${(p) => p.theme.colors.gray15};
      font-weight: 600;

      ${laptop} {
        font-size: 1.8rem;
        margin-bottom: 10px;
      }
      ${desktop} {
        font-size: 2rem;

        margin-bottom: 15px;
      }
    }
    & > a {
      font-size: 1.4rem;
      color: ${(p) => p.theme.colors.gray35};
      ${laptop} {
        font-size: 1.6rem;
      }
      ${desktop} {
        font-size: 1.8rem;
      }
    }

    ${laptop} {
      max-width: 300px;
    }
  }
  @media (width>=600px) {
    gap: 60px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <LeftColumn>
          <img src="/logo.svg" alt="logo" />
          <ul>
            <li>
              <img src="/f-1.svg" alt="icon" />
              hello@skillbridge.com
            </li>
            <li>
              <img src="/f-2.svg" alt="icon" />
              +91 91813 23 2309
            </li>
            <li>
              <img src="/f-3.svg" alt="icon" />
              Somewhere in the World
            </li>
          </ul>
        </LeftColumn>
        <RightColumn>
          <ListList>
            <ul>
              <b>Home</b>
              <Link to={"/"}>Benefits</Link>
              <Link to={"/courses"}>Our Courses</Link>
              <Link to={"/testimonials"}>Our Testimonials</Link>
              <Link to={"/faq"}>Our FAQ</Link>
            </ul>
            <ul>
              <b>About Us</b>
              <Link to={"/contact"}>Company</Link>
              <Link to={"/"}>Achievements</Link>
              <Link to={"/about"}>Our Goals</Link>
            </ul>
          </ListList>

          <div>
            <h3>Social Profiles</h3>
            <div>
              <a href="#">
                <img src="/so-3.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="/so-2.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="/so-1.svg" alt="facebook" />
              </a>
            </div>
          </div>
        </RightColumn>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
