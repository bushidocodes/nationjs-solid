import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, sizes } from "../../../theme";
import { useProfile } from "../../../hooks/useProfile";

const AvatarReal = styled.div`
  position: absolute;
  top: -140px;
  height: 168px;
  width: 168px;
  background-color: white;
  border: 6px solid white;
  border-radius: 90px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SectionHeader = styled.div`
  background-color: ${colors.white};
  border: solid 1px ${colors.borderGray};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  height: ${sizes.navbarHeight};
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
  border: 1px solid ${colors.borderGrayLighter};
`;

function TimelineTopSection({ webid }) {
  const decodedWebId = decodeURIComponent(webid);
  const { profile } = useProfile(decodedWebId);

  return (
    <div>
      <div
        style={{
          height: sizes.profileHeroHeight,
          backgroundColor: colors.profileHero,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            alignSelf: "flex-end",
            width: sizes.avatarSize,
            position: "relative",
            marginLeft: "20px",
          }}
        >
          <AvatarReal>
            {profile?.image && (
              <img src={profile.image} alt={profile.name || "avatar"} />
            )}
          </AvatarReal>
        </div>
        <div
          style={{
            color: "white",
            marginLeft: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
            alignSelf: "flex-end",
            fontSize: "24px",
          }}
        >
          {profile?.name || decodedWebId}
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "43px" }}>
        <SectionHeader>
          <Link to={`/${webid}/`}>
            <SectionHeaderItem>About</SectionHeaderItem>
          </Link>
          <Link to={`/${webid}/friends/`}>
            <SectionHeaderItem>Friends</SectionHeaderItem>
          </Link>
        </SectionHeader>
      </div>
    </div>
  );
}

export default TimelineTopSection;
