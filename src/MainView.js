import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import { AuthButton, Image, Value } from "@solid/react";
import styled from "styled-components";
import TimelineTopSection from "./TimelineTopSection";
import FriendsSection from "./FriendsSection";

const NavBar = styled.div`
  background-color: #4267b2;
  color: #fff;
  height: 43px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 43px 1fr auto 100px;
  grid-gap: 20px;
`;

const MainContent = styled.div`
  height: 100%;
`;

const MainContentCenterLoggedIn = styled.div`
  width: 951px;
  margin: auto;
`;

const StyledLogOutButton = styled(AuthButton)`
  background-color: #3578e5;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  height: 24px;
  width: 75px;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  margin-right: 10px;
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
  align-self: center;
  margin-left: 10px;
`;

const MiniAvatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 90px;
  overflow: hidden;
  align-self: center;
  margin-right: 10px;
  * {
    height: 100%;
    width: 100%;
  }
`;

const ProfileBadge = styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
`;

class MainView extends Component {
  render() {
    return (
      <Fragment>
        <NavBar>
          <Icon src={logo} alt="logo" />
          <input style={{ margin: "10px" }} type="text" name="lastname" />
          <ProfileBadge>
            <MiniAvatar>
              <Image src="user.image" />
            </MiniAvatar>

            <Value src="user.name" />
          </ProfileBadge>
          <StyledLogOutButton popup="popup.html" />
        </NavBar>
        <MainContent>
          <MainContentCenterLoggedIn>
            <TimelineTopSection />
            <FriendsSection />
          </MainContentCenterLoggedIn>
        </MainContent>
      </Fragment>
    );
  }
}

export default MainView;
