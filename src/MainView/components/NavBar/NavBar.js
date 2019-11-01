import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";
// import ProfileBadge from "./ProfileBadge";
import NavBarField from "./NavBarField";

const Icon = styled.img`
  height: 35px;
  width: 35px;
  align-self: center;
`;

const NavBarWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #4267b2;
  color: #fff;
  height: 43px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 43px 1fr auto 100px;
  grid-gap: 20px;
`;

class NavBar extends Component {
  state = {
    draftURI: this.props.webid ? decodeURIComponent(this.props.webid) : "",
    shouldRedirect: false
  };
  handleSubmit = evt => {
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
              alignContent: "center"
            }}
            to="/"
          >
            <Icon src={logo} alt="logo" />
          </Link>
          <NavBarField webid={this.props.webid} key={this.props.webid || ""} />
          {/* <ProfileBadge /> */}
        </NavBarWrapper>
      );
    }
  };
}

export default NavBar;
