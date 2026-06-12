import { LoggedIn, LoggedOut } from "@solid/react";
import styled from "styled-components";
import Login from "./LogIn/Login";
import MainView from "./MainView";
import { BrowserRouter as Router } from "react-router-dom";
import { sizes } from "./theme";

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: ${sizes.navbarHeight} 1fr;
  grid-template-columns: 100%;
`;

const LoggedInContent = styled.div`
  text-align: left;
`;

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppWrapper>
        <LoggedIn>
          <LoggedInContent>
            <MainView />
          </LoggedInContent>
        </LoggedIn>
        <LoggedOut>
          <Login />
        </LoggedOut>
      </AppWrapper>
    </Router>
  );
}

export default App;
