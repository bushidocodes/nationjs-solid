import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import logo from "./logo.svg";
import { AuthButton } from "@solid/react";
import styled from "styled-components";
import ProfileBadge from "./ProfileBadge";
import NavBarField from "./NavBarField";
import { colors, sizes } from "../../../theme";

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

class NavBar extends Component {
  state = {
    draftURI: this.props.webid ? decodeURIComponent(this.props.webid) : "",
    shouldRedirect: false,
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ shouldRedirect: true });
  };
  render = () => {
    if (this.state.shouldRedirect === true) {
      this.setState({ shouldRedirect: false });
      return <Redirect to={`/${encodeURIComponent(this.state.draftURI)}`} />;
    } else {
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
          <NavBarField webid={this.props.webid} key={this.props.webid || ""} />
          <ProfileBadge />
          <StyledLogOutButton popup="/popup.html" />
        </NavBarWrapper>
      );
    }
  };
}

export default NavBar;
