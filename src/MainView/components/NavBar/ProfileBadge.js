import React from "react";
import PropTypes from "prop-types";
import { withWebId, Image, Value } from "@solid/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const ProfileBadge = ({ webId }) => (
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

ProfileBadge.propTypes = {
  webId: PropTypes.string,
};

export default withWebId(ProfileBadge);
