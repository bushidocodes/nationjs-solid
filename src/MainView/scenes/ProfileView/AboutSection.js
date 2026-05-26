import React from "react";
import styled from "styled-components";
import { List, Value } from "@solid/react";
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

const SubSectionHeader = styled.h4`
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px;
`;

const renderLinkedLI = (elem, index) => (
  <a href={elem.id}>
    <li key={index}>{elem.id}</li>
  </a>
);

function AboutSection({ webid }) {
  const decodedWebID = decodeURIComponent(webid);
  return (
    <SectionWrapper>
      <SectionHeader>
        <h3>About</h3>
      </SectionHeader>
      <SectionBody>
        <SubSectionHeader>Biographic Data</SubSectionHeader>
        <ul>
          <li>
            First Name:
            <Value src={`[${decodedWebID}].firstName`} />
          </li>
          <li>
            Last Name:
            <Value src={`[${decodedWebID}].familyName`} />
          </li>
          <li>
            Nickname:
            <Value src={`[${decodedWebID}].nick`} />
          </li>
          <li>
            Birthday:
            <Value src={`[${decodedWebID}].birthday`} />
          </li>
          <li>
            Age:
            <Value src={`[${decodedWebID}].age`} />
          </li>
          <li>
            Gender:
            <Value src={`[${decodedWebID}].gender`} />
          </li>
        </ul>
        <SubSectionHeader>Pages</SubSectionHeader>
        <ul>
          <List src={`[${decodedWebID}].weblog`} container={(items) => items}>
            {renderLinkedLI}
          </List>
          <List src={`[${decodedWebID}].homepage`} container={(items) => items}>
            {renderLinkedLI}
          </List>
          <List src={`[${decodedWebID}].page`} container={(items) => items}>
            {renderLinkedLI}
          </List>
          <List src={`[${decodedWebID}].publications`} container={(items) => items}>
            {renderLinkedLI}
          </List>
          <List src={`[${decodedWebID}].account`} container={(items) => items}>
            {renderLinkedLI}
          </List>
        </ul>
        <SubSectionHeader>Source Data</SubSectionHeader>
        <ul>
          <a href={decodedWebID}>
            <li>{decodedWebID}</li>
          </a>
        </ul>
      </SectionBody>
    </SectionWrapper>
  );
}

export default AboutSection;
