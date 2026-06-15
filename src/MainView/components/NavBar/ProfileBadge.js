import styled from "styled-components";
import { Link } from "react-router";
import { colors, sizes } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";
import { useProfile } from "../../../hooks/useProfile";

const ProfileBadgeWrapper = styled.div`
  height: ${sizes.navbarHeight};
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
`;

const MiniAvatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 90px;
  overflow: hidden;
  align-self: center;
  margin-right: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Text = styled.span`
  color: ${colors.white};
  font-weight: bold;
  text-decoration: none;
`;

function ProfileBadge() {
  const { webId } = useAuth();
  const { profile } = useProfile(webId);

  if (!webId) return null;

  return (
    <Link to={`/${encodeURIComponent(webId)}`}>
      <ProfileBadgeWrapper>
        <MiniAvatar>
          {profile?.image && (
            <img src={profile.image} alt={profile.name || "avatar"} />
          )}
        </MiniAvatar>
        <Text>{profile?.name || webId}</Text>
      </ProfileBadgeWrapper>
    </Link>
  );
}

export default ProfileBadge;
