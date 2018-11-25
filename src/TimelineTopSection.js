import React, { Component } from "react";
import { Value, Image } from "@solid/react";
import styled from "styled-components";

const AvatarReal = styled.div`
  position: absolute;
  top: -140px;
  height: 168px;
  width: 168px;
  background-color: yellow;
  border: 6px solid white;
  border-radius: 90px;
  overflow: hidden;
  * {
    height: 100%;
    width: 100%;
  }
`;

class TimelineTopSection extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "315px",
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              width: "168px",
              position: "relative",
              marginLeft: "20px"
            }}
          >
            <AvatarReal>
              <Image src="user.image" />
            </AvatarReal>
          </div>
          <div
            style={{
              color: "white",
              marginLeft: "20px",
              marginBottom: "20px",
              fontWeight: "bold",
              alignSelf: "flex-end",
              fontSize: "24px"
            }}
          >
            <Value src="user.name" />
          </div>
        </div>
        <div style={{ backgroundColor: "white", height: "43px" }} />
      </div>
    );
  }
}

export default TimelineTopSection;
