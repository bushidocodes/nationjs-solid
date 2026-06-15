import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router";
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

const FriendAvatarPlaceholder = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${colors.surfaceGray};
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

const EmptyMessage = styled.p`
  padding: 10px;
  color: ${colors.textGray};
`;

function FriendCard({ friendWebId }) {
  const { profile } = useProfile(friendWebId);
  return (
    <Link to={`/${encodeURIComponent(friendWebId)}`}>
      <FriendGridItem>
        {profile?.image ? (
          <FriendAvatar src={profile.image} alt={profile.name || ""} />
        ) : (
          <FriendAvatarPlaceholder />
        )}
        <FriendName>{profile?.name || friendWebId}</FriendName>
      </FriendGridItem>
    </Link>
  );
}

FriendCard.propTypes = {
  friendWebId: PropTypes.string.isRequired,
};

function FriendsSection({ webid }) {
  const decodedWebID = decodeURIComponent(webid);
  const { profile, loading } = useProfile(decodedWebID);
  const friends = profile?.friends ?? [];

  return (
    <FriendsSectionWrapper>
      <SectionHeader>
        <h3>Friends</h3>
      </SectionHeader>
      {loading && <EmptyMessage>Loading…</EmptyMessage>}
      {!loading && friends.length === 0 && (
        <EmptyMessage>No friends listed in this SOLID profile.</EmptyMessage>
      )}
      {friends.length > 0 && (
        <FriendGrid>
          {friends.map((friendUrl) => (
            <FriendCard key={friendUrl} friendWebId={friendUrl} />
          ))}
        </FriendGrid>
      )}
    </FriendsSectionWrapper>
  );
}

FriendsSection.propTypes = {
  webid: PropTypes.string.isRequired,
};

export default FriendsSection;
