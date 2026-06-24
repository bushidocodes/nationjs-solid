import { withWebId, Image, Value } from "@solid/react";
import styled from "styled-components";
import { Link } from "react-router";
import { colors, sizes } from "../../../theme";

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
  * {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.span`
  color: ${colors.white};
  font-weight: bold;
  text-decoration: none;
`;

interface ProfileBadgeProps {
  webId?: string;
}

const ProfileBadge = ({ webId = "" }: ProfileBadgeProps) => (
  <Link to={`/${encodeURIComponent(webId)}`}>
    <ProfileBadgeWrapper>
      <MiniAvatar>
        <Image src="user.image" />
      </MiniAvatar>

      <Text>
        <Value src="user.name" />
      </Text>
    </ProfileBadgeWrapper>
  </Link>
);

export default withWebId(ProfileBadge);
