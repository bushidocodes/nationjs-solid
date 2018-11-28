import React, { Component, Fragment } from "react";
import styled from "styled-components";
import TimelineTopSection from "../scenes/ProfileView/TimelineTopSection";
import FriendsSection from "../scenes/ProfileView/FriendsSection";
import { Route, Switch } from "react-router-dom";
import About from "../scenes/About";
import NavBar from "../NavBar/NavBar";

const MainContent = styled.div`
  height: 100%;
`;

const MainContentCenterLoggedIn = styled.div`
  width: 951px;
  margin: auto;
`;

class MainView extends Component {
  render() {
    // I've added a key to NavBar to blow away draft state on navigation. https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
    return (
      <Fragment>
        <Switch>
          <Route
            path="/:webid"
            render={({
              match: {
                params: { webid }
              }
            }) => <NavBar webid={webid || ""} />}
          />
          <Route path="/" exact render={() => <NavBar webid="" />} />
        </Switch>
        <MainContent>
          <MainContentCenterLoggedIn>
            <Switch>
              <Route path="/" exact component={About} />
              <Route
                path="/:webid"
                render={({
                  match: {
                    params: { webid }
                  }
                }) => (
                  <Fragment>
                    <TimelineTopSection webid={webid} />
                    <FriendsSection webid={webid} />
                  </Fragment>
                )}
              />
            </Switch>
          </MainContentCenterLoggedIn>
        </MainContent>
      </Fragment>
    );
  }
}

export default MainView;
