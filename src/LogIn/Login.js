import { useState } from "react";
import styled from "styled-components";
import { colors, sizes } from "../theme";
import { useAuth } from "../context/AuthContext";

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

const IdpInput = styled.input`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${colors.borderGray};
`;

const LogInButton = styled.button`
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
  cursor: pointer;
`;

function Login() {
  const { login } = useAuth();
  const [idpUrl, setIdpUrl] = useState("https://solidcommunity.net");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(idpUrl);
  };

  return (
    <>
      <NavBarLoggedOut>
        <Logo>solid</Logo>
      </NavBarLoggedOut>
      <MainContent>
        <MainContentCenterLoggedOut>
          <form onSubmit={handleSubmit}>
            <IdpInput
              type="url"
              value={idpUrl}
              onChange={(e) => setIdpUrl(e.target.value)}
              placeholder="https://solidcommunity.net"
            />
            <LogInButton type="submit">Log in</LogInButton>
          </form>
        </MainContentCenterLoggedOut>
      </MainContent>
    </>
  );
}

export default Login;
