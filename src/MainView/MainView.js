import React from "react";
import styled from "styled-components";
import { Routes, Route, useParams } from "react-router-dom";
import { sizes } from "../theme";
import About from "./scenes/About";
import NavBar from "./components/NavBar";
import ProfileErrorBoundary from "./components/ProfileErrorBoundary";
import TimelineTopSection from "./scenes/ProfileView/TimelineTopSection";
import FriendsSection from "./scenes/ProfileView/FriendsSection";
import AboutSection from "./scenes/ProfileView/AboutSection";

const MainContent = styled.div`
  height: 100%;
`;

const MainContentCenterLoggedIn = styled.div`
  width: ${sizes.contentWidth};
  margin: auto;
`;

function NavBarRoute() {
  const { webid } = useParams();
  return <NavBar webid={webid || ""} />;
}

function ProfileRoutes() {
  const { webid } = useParams();
  return (
    <>
      <TimelineTopSection webid={webid} />
      <Routes>
        <Route path="/" element={<AboutSection webid={webid} />} />
        <Route path="/friends/" element={<FriendsSection webid={webid} />} />
      </Routes>
    </>
  );
}

function MainView() {
  return (
    <>
      <Routes>
        <Route path="/:webid/*" element={<NavBarRoute />} />
        <Route path="/" element={<NavBar webid="" />} />
      </Routes>
      <MainContent>
        <MainContentCenterLoggedIn>
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/:webid/*"
              element={
                <ProfileErrorBoundary>
                  <ProfileRoutes />
                </ProfileErrorBoundary>
              }
            />
          </Routes>
        </MainContentCenterLoggedIn>
      </MainContent>
    </>
  );
}

export default MainView;
