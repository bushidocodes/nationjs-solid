import React, { Component } from "react";
import styled from "styled-components";
import MainView from "./MainView";
import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 43px 1fr;
  grid-template-columns: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
            <MainView />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
