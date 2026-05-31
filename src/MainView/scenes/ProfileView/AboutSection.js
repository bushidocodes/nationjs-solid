import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";
import { useProfile } from "../../../hooks/useProfile";

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

function AboutSection({ webid }) {
  const decodedWebId = decodeURIComponent(webid);
  const { profile, loading } = useProfile(decodedWebId);

  const bioFields = profile
    ? [
        { label: "First Name", value: profile.firstName },
        { label: "Last Name", value: profile.familyName },
        { label: "Nickname", value: profile.nick },
        { label: "Birthday", value: profile.birthday },
        { label: "Age", value: profile.age },
        { label: "Gender", value: profile.gender },
      ]
    : [];

  const pageFields = profile
    ? [
        ...profile.weblog,
        ...profile.homepage,
        ...profile.page,
        ...profile.publications,
        ...profile.account,
      ]
    : [];

  return (
    <SectionWrapper>
      <SectionHeader>
        <h3>About</h3>
      </SectionHeader>
      <SectionBody>
        {loading && <p>Loading…</p>}
        <SubSectionHeader>Biographic Data</SubSectionHeader>
        <ul>
          {bioFields.map(({ label, value }) =>
            value ? (
              <li key={label}>
                {label}: {value}
              </li>
            ) : null
          )}
        </ul>
        <SubSectionHeader>Pages</SubSectionHeader>
        <ul>
          {pageFields.map((url) => (
            <a href={url} key={url}>
              <li>{url}</li>
            </a>
          ))}
        </ul>
        <SubSectionHeader>Source Data</SubSectionHeader>
        <ul>
          <a href={decodedWebId}>
            <li>{decodedWebId}</li>
          </a>
        </ul>
      </SectionBody>
    </SectionWrapper>
  );
}

export default AboutSection;
