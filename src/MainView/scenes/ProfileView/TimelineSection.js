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
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: solid 1px #d3d6db;
`;

class TimelineSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <SectionHeader>
          <h3>Timeline</h3>
        </SectionHeader>
        <SectionBody>
          Under Construction! This would the Activity Streams Outbox of the
          selected person
        </SectionBody>
      </SectionWrapper>
    );
  }
}

export default TimelineSection;
