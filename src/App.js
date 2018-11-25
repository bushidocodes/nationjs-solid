import React, { Component } from "react";
import { LoggedIn, LoggedOut } from "@solid/react";
import styled from "styled-components";
import Login from "./Login";
import MainView from "./MainView";

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
      <AppWrapper>
        <LoggedIn style={{ textAlign: "left" }}>
          <MainView />
        </LoggedIn>
        <LoggedOut>
          <Login />
        </LoggedOut>
      </AppWrapper>
    );
  }
}

export default App;
