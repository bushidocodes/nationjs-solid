import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../theme";
import { useProfile } from "../../../hooks/useProfile";

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
  border: solid 1px ${colors.borderGray};
  border-radius: 3px;
  overflow: hidden;
`;

const FriendAvatar = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
`;

const FriendsSectionWrapper = styled.div`
  background-color: ${colors.white};
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  border: solid 1px ${colors.borderGrayLight};
`;

const SectionHeader = styled.div`
  background-color: ${colors.surfaceGray};
  text-align: left;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: solid 1px ${colors.borderGrayLight};
`;

const FriendName = styled.div`
  align-self: center;
  margin-left: 15px;
  text-align: left;
  font-weight: bold;
`;

function FriendCard({ friendWebId }) {
  const { profile } = useProfile(friendWebId);
  return (
    <Link to={`/${encodeURIComponent(friendWebId)}`}>
      <FriendGridItem>
        {profile?.image ? (
          <FriendAvatar src={profile.image} alt={profile.name || ""} />
        ) : (
          <div style={{ width: 100, height: 100, backgroundColor: "#e9ebee" }} />
        )}
        <FriendName>{profile?.name || friendWebId}</FriendName>
      </FriendGridItem>
    </Link>
  );
}

function FriendsSection({ webid }) {
  const decodedWebId = decodeURIComponent(webid);
  const { profile, loading } = useProfile(decodedWebId);

  return (
    <FriendsSectionWrapper>
      <SectionHeader>
        <h3>Friends</h3>
      </SectionHeader>
      {loading && <p style={{ padding: "10px" }}>Loading…</p>}
      {profile?.friends?.length > 0 && (
        <FriendGrid>
          {profile.friends.map((friendUrl) => (
            <FriendCard key={friendUrl} friendWebId={friendUrl} />
          ))}
        </FriendGrid>
      )}
    </FriendsSectionWrapper>
  );
}

export default FriendsSection;
