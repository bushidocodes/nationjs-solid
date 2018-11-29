import React, { Component, Fragment } from "react";
import { AuthButton } from "@solid/react";
import styled from "styled-components";

const NavBar = styled.div`
  background-color: #4267b2;
  color: #fff;
  height: 43px;
  display: flex;
  justify-content: space-between;
`;
const NavBarLoggedOut = styled(NavBar)`
  background-color: #4267b2;
  color: #fff;
  height: 43px;
  display: flex;
  justify-content: center;
`;

const MainContent = styled.div`
  height: 100%;
  background-color: #e9ebee;
`;

const MainContentCenterLoggedOut = styled.div`
  padding-top: 12px;
  width: 416px;
  margin: auto;
`;

const Logo = styled.h1`
  margin-top: 0px;
`;

const StyledLogInButton = styled(AuthButton)`
  background-color: #3578e5;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
`;

class Login extends Component {
  render() {
    return (
      <Fragment>
        <NavBarLoggedOut>
          <Logo>solid</Logo>
        </NavBarLoggedOut>
        <MainContent>
          <MainContentCenterLoggedOut>
            <StyledLogInButton popup="/popup.html" />
          </MainContentCenterLoggedOut>
        </MainContent>
      </Fragment>
    );
  }
}

export default Login;
