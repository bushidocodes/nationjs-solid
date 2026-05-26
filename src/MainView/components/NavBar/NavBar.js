import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";
import ProfileBadge from "./ProfileBadge";
import NavBarField from "./NavBarField";
import { colors, sizes } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";

const Icon = styled.img`
  height: 35px;
  width: 35px;
  align-self: center;
`;

const LogOutButton = styled.button`
  background-color: ${colors.actionBlue};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${colors.white};
  height: 24px;
  width: 80px;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  cursor: pointer;
`;

const NavBarWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${colors.brandBlue};
  color: ${colors.white};
  height: ${sizes.navbarHeight};
  display: grid;
  justify-content: space-between;
  grid-template-columns: ${sizes.navbarHeight} 1fr auto 100px;
  grid-gap: 20px;
`;

function NavBar({ webid }) {
  const { logout } = useAuth();
  return (
    <NavBarWrapper>
      <Link
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          alignContent: "center",
        }}
        to="/"
      >
        <Icon src={logo} alt="logo" />
      </Link>
      <NavBarField webid={webid} key={webid || ""} />
      <ProfileBadge />
      <LogOutButton onClick={logout}>Log out</LogOutButton>
    </NavBarWrapper>
  );
}

export default NavBar;
