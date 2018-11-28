import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import About from "./scenes/About";
import NavBar from "./components/NavBar";
import TimelineTopSection from "./scenes/ProfileView/TimelineTopSection";
import TimelineSection from "./scenes/ProfileView/TimelineSection";
import FriendsSection from "./scenes/ProfileView/FriendsSection";
import AboutSection from "./scenes/ProfileView/AboutSection";
import PhotosSection from "./scenes/ProfileView/PhotosSection";

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
                    <Switch>
                      <Route
                        path="/:webid/"
                        exact
                        render={({
                          match: {
                            params: { webid }
                          }
                        }) => <TimelineSection webid={webid} />}
                      />
                      <Route
                        path="/:webid/about/"
                        exact
                        render={({
                          match: {
                            params: { webid }
                          }
                        }) => <AboutSection webid={webid} />}
                      />
                      <Route
                        path="/:webid/friends/"
                        exact
                        render={({
                          match: {
                            params: { webid }
                          }
                        }) => <FriendsSection webid={webid} />}
                      />
                      <Route
                        path="/:webid/photos/"
                        exact
                        render={({
                          match: {
                            params: { webid }
                          }
                        }) => <PhotosSection webid={webid} />}
                      />
                    </Switch>
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
