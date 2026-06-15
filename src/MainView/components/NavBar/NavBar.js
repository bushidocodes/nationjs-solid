import PropTypes from "prop-types";
import { Link } from "react-router";
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

const LogoLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;
`;

function NavBar({ webid }) {
  const { logout } = useAuth();
  return (
    <NavBarWrapper>
      <LogoLink to="/">
        <Icon src={logo} alt="logo" />
      </LogoLink>
      <NavBarField webid={webid} key={webid || ""} />
      <ProfileBadge />
      <LogOutButton onClick={logout}>Log out</LogOutButton>
    </NavBarWrapper>
  );
}

NavBar.propTypes = {
  webid: PropTypes.string,
};

export default NavBar;
