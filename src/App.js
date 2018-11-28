import React, { Component } from "react";
import { LoggedIn, LoggedOut } from "@solid/react";
import styled from "styled-components";
import Login from "./LogIn/Login";
import MainView from "./MainView";
import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-rows: 43px 1fr;
  grid-template-columns: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <LoggedIn style={{ textAlign: "left" }}>
            <MainView />
          </LoggedIn>
          <LoggedOut>
            <Login />
          </LoggedOut>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
