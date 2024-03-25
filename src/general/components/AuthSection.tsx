import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import laptop from "../utils/laptop";

interface MNav {
  show: boolean;
}
interface Btn {
  close?: boolean;
}
interface List {
  list: string[];
}

const StyledAuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > a {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1.4rem;
  }
  & > p {
    padding: 12px 20px;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.orange};
    & > a {
      color: ${(props) => props.theme.colors.white};
      font-size: 1.4rem;
    }
  }
`;
const Btn = styled.button<Btn>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;

  ${laptop} {
    display: none;
  }

  ${(props) => {
    if (props.close) {
      return css`
        position: absolute;
        right: 20px;
        color: white;
        top: 20px;
      `;
    }
  }}
`;

const MobileNavigation = styled.div<MNav>`
  z-index: 1000;
  display: block;
  text-align: center;
  padding-top: 100px;
  overflow: hidden;
  position: fixed;
  width: ${(props) => (props.show ? "100%" : "0")};
  /* max-width: 600px;   */
  left: 0;
  bottom: 0;
  min-height: 100%;
  transition: 500ms all;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.9;

  ${laptop} {
    display: none;
  }
`;

const LinkList = styled.ul`
  display: grid;
  gap: 15px;
  & > a {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    text-transform: capitalize;
  }
`;

const AuthSection: React.FC<List> = ({ list }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = (props: { type?: string }) => {
    if (props.type === "close") {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <StyledAuthSection>
      <Link to={"/auth/singup"}>Sing Up</Link>
      <p>
        <Link to={"/auth/login"}>Login</Link>
      </p>

      <Btn onClick={() => handleClick({ type: "show" })}>
        <img src="/menu-icon.svg" alt="menu-icon" />
      </Btn>

      <MobileNavigation show={show} onClick={(e) => e.stopPropagation()}>
        <Btn close onClick={() => handleClick({ type: "close" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={24}
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </Btn>

        <LinkList>
          {list.map((e, i) => (
            <Link
              key={i}
              to={e === "about us" ? "about" : e === "home" ? "/" : e}
            >
              {e}
            </Link>
          ))}
        </LinkList>
      </MobileNavigation>
    </StyledAuthSection>
  );
};

export default AuthSection;
