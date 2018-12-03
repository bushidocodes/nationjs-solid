import React, { Component } from "react";
import { Value, Image } from "@solid/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AvatarReal = styled.div`
  position: absolute;
  top: -140px;
  height: 168px;
  width: 168px;
  background-color: white;
  border: 6px solid white;
  border-radius: 90px;
  overflow: hidden;
  * {
    height: 100%;
    width: 100%;
  }
`;

const SectionHeader = styled.div`
  background-color: white;
  border: solid 1px #ccd0d5;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  height: 43px;
  padding-left: 201px;
`;

const SectionHeaderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  padding-left: 17px;
  padding-right: 17px;
  border: 1px solid #e9eaed;
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
              <Image src={`[${decodeURIComponent(this.props.webid)}].image`} />
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
            <Value src={`[${decodeURIComponent(this.props.webid)}].name`} />
          </div>
        </div>
        <div style={{ backgroundColor: "white", height: "43px" }}>
          <SectionHeader>
            {/* <Link to={`/${this.props.webid}/`}>
              <SectionHeaderItem>Timeline</SectionHeaderItem>
            </Link> */}
            <Link to={`/${this.props.webid}/`}>
              <SectionHeaderItem>About</SectionHeaderItem>
            </Link>
            <Link to={`/${this.props.webid}/friends/`}>
              <SectionHeaderItem>Friends</SectionHeaderItem>
            </Link>
            {/* <Link to={`/${this.props.webid}/photos/`}>
              <SectionHeaderItem>Photos</SectionHeaderItem>
            </Link> */}
          </SectionHeader>
        </div>
      </div>
    );
  }
}

export default TimelineTopSection;
