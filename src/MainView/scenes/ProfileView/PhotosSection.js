import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  background-color: white;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  border: solid 1px #d3d6db;
`;

const SectionBody = styled.div`
  padding: 10px;
`;

const SectionHeader = styled.div`
  background-color: #f5f6f7;
  text-align: left;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: solid 1px #d3d6db;
`;

class PhotosSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <SectionHeader>
          <h3>Photos</h3>
        </SectionHeader>
        <SectionBody>Under Construction!</SectionBody>
      </SectionWrapper>
    );
  }
}

export default PhotosSection;
