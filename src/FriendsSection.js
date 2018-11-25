import React, { Component } from "react";
import { Value, Image, List } from "@solid/react";
import styled from "styled-components";

const FriendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px;
  grid-gap: 10px;
  padding: 10px;
`;

const FriendGridItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  height: 100px;
  border: solid 1px #ccd0d5;
  border-radius: 3px;
`;

const FriendImage = styled(Image)`
  height: 100px;
`;

const FriendsSectionWrapper = styled.div`
  background-color: white;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const FriendSectionHeader = styled.div`
  background-color: #f5f6f7;
  border: solid 1px #ccd0d5;
  border-radius: 3px;
`;

const FriendName = styled.div`
  align-self: center;
  margin-left: 15px;
  text-align: left;
`;

class FriendsSection extends Component {
  render() {
    return (
      <FriendsSectionWrapper>
        <FriendSectionHeader>
          <h3 style={{ marginLeft: "30px", textAlign: "left" }}>Friends</h3>
        </FriendSectionHeader>
        <List
          src="user.friends"
          container={items => <FriendGrid>{items}</FriendGrid>}
          children={(elem, index) => {
            return (
              <FriendGridItem key={index}>
                <FriendImage src={`[${elem.id}].image`} />
                <FriendName>
                  <Value src={`[${elem.id}].name`} />{" "}
                </FriendName>
              </FriendGridItem>
            );
          }}
        />
      </FriendsSectionWrapper>
    );
  }
}

export default FriendsSection;
