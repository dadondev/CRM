import { NavLink } from "react-router-dom";
import styled from "styled-components";
import laptop from "../utils/laptop";
import AuthSection from "./AuthSection";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
  ${laptop} {
    padding-inline: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  & > a > img {
    width: 40px;
  }
`;

const NavList = styled.ul`
  display: none;
  gap: 3px;
  height: 45px;
  & > a {
    padding: 12px 18px;
    width: 100px;
    font-size: 1.4rem;
    text-align: center;
    color: ${(props) => props.theme.colors.gray};
    transition: 500ms all;
    text-transform: capitalize;
    border-radius: 8px;
    background-color: transparent;
    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }
  }
  ${laptop} {
    display: flex;
  }
`;
// const NavListItem = styled.li`
//   padding: 12px 20px;
//   font-size: 1.4rem;
//   color: ${(props) => props.theme.colors.black};
//   transition: 500ms all;
//   text-transform: capitalize;
//   &:hover {
//     background-color: ${(props) => props.theme.colors.lightGray};
//   }
// `;

const list = ["home", "courses", "about", "pricing", "contact"];

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
        <NavList>
          {list.map((e, i) => (
            <NavLink
              to={"/" + e === "about us" ? "about" : e === "home" ? "/" : e}
              key={i}
            >
              {e}
            </NavLink>
          ))}
        </NavList>
      </NavLinks>
      <AuthSection list={list} />
    </Nav>
  );
};

export default Navbar;
