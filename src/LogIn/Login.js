import React from "react";
import { AuthButton } from "@solid/react";
import styled from "styled-components";
import { colors, sizes } from "../theme";

const NavBarBase = styled.div`
  background-color: ${colors.brandBlue};
  color: ${colors.white};
  height: ${sizes.navbarHeight};
  display: flex;
  justify-content: space-between;
`;
const NavBarLoggedOut = styled(NavBarBase)`
  justify-content: center;
`;

const MainContent = styled.div`
  height: 100%;
  background-color: ${colors.backgroundGray};
`;

const MainContentCenterLoggedOut = styled.div`
  padding-top: 12px;
  width: ${sizes.loginFormWidth};
  margin: auto;
`;

const Logo = styled.h1`
  margin-top: 0px;
`;

const StyledLogInButton = styled(AuthButton)`
  background-color: ${colors.actionBlue};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${colors.white};
  height: 36px;
  line-height: 36px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
`;

function Login() {
  return (
    <>
      <NavBarLoggedOut>
        <Logo>solid</Logo>
      </NavBarLoggedOut>
      <MainContent>
        <MainContentCenterLoggedOut>
          <StyledLogInButton popup="/popup.html" />
        </MainContentCenterLoggedOut>
      </MainContent>
    </>
  );
}

export default Login;
