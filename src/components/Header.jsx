import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/home">
        <img src="images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
  position: sticky;
  top: 1px;
  box-shadow: 5px 5px 6px #dadada, -5px -5px 6px #f6f6f6;
  z-index: 9;
`;

export default Header;
