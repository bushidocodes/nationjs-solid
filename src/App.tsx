import React from "react";
import styled from "styled-components";
import Login from "./LogIn/Login";
import MainView from "./MainView";
import { BrowserRouter as Router } from "react-router-dom";
import { sizes } from "./theme";
import { useAuth } from "./context/AuthContext";

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: ${sizes.navbarHeight} 1fr;
  grid-template-columns: 100%;
`;

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Router>
      <AppWrapper>
        {isLoggedIn ? <MainView /> : <Login />}
      </AppWrapper>
    </Router>
  );
}

export default App;
