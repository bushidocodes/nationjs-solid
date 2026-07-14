import { Route, Routes, useParams } from "react-router";
import styled from "styled-components";
import { sizes } from "../theme";
import NavBar from "./components/NavBar";
import ProfileErrorBoundary from "./components/ProfileErrorBoundary";
import About from "./scenes/About";
import AboutSection from "./scenes/ProfileView/AboutSection";
import FriendsSection from "./scenes/ProfileView/FriendsSection";
import TimelineTopSection from "./scenes/ProfileView/TimelineTopSection";

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
  const webid = useParams().webid ?? "";
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
