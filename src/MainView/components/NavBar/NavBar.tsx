import { AuthButton } from "@solid/react";
import { Link } from "react-router";
import styled from "styled-components";
import { colors, sizes } from "../../../theme";
import logo from "./logo.svg";
import NavBarField from "./NavBarField";
import ProfileBadge from "./ProfileBadge";

const Icon = styled.img`
  height: 35px;
  width: 35px;
  align-self: center;
`;

const StyledLogOutButton = styled(AuthButton)`
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

const LogoLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;
`;

interface NavBarProps {
  webid?: string;
}

function NavBar({ webid }: NavBarProps) {
  return (
    <NavBarWrapper>
      <LogoLink to="/">
        <Icon src={logo} alt="logo" />
      </LogoLink>
      <NavBarField webid={webid} key={webid || ""} />
      <ProfileBadge />
      <StyledLogOutButton popup="/popup.html" />
    </NavBarWrapper>
  );
}

export default NavBar;
