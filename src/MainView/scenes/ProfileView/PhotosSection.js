import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";

const SectionWrapper = styled.div`
  background-color: ${colors.white};
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  border: solid 1px ${colors.borderGrayLight};
`;

const SectionBody = styled.div`
  padding: 10px;
`;

const SectionHeader = styled.div`
  background-color: ${colors.surfaceGray};
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: solid 1px ${colors.borderGrayLight};
`;

function PhotosSection() {
  return (
    <SectionWrapper>
      <SectionHeader>
        <h3>Photos</h3>
      </SectionHeader>
      <SectionBody>Under Construction!</SectionBody>
    </SectionWrapper>
  );
}

export default PhotosSection;
