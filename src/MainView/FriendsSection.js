import React, { Component } from "react";

import { Value, Image, List } from "@solid/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 100px;
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
const Text = styled.span`
  font-weight: bold;
  text-decoration: none;
`;

class FriendsSection extends Component {
  render() {
    return (
      <FriendsSectionWrapper>
        <FriendSectionHeader>
          <h3 style={{ marginLeft: "30px", textAlign: "left" }}>Friends</h3>
        </FriendSectionHeader>
        <List
          src={`[${decodeURIComponent(this.props.webid)}].friends`}
          container={items => <FriendGrid>{items}</FriendGrid>}
          children={(elem, index) => {
            return (
              <Link key={index} to={`/${encodeURIComponent(elem.id)}`}>
                <FriendGridItem>
                  <FriendImage src={`[${elem.id}].image`} />
                  <FriendName>
                    <Text>
                      <Value src={`[${elem.id}].name`} />
                    </Text>
                  </FriendName>
                </FriendGridItem>
              </Link>
            );
          }}
        />
      </FriendsSectionWrapper>
    );
  }
}

export default FriendsSection;
