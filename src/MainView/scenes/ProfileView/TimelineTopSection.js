import PropTypes from "prop-types";
import { Value, Image } from "@solid/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, sizes } from "../../../theme";

const AvatarReal = styled.div`
  position: absolute;
  top: -140px;
  height: 168px;
  width: 168px;
  background-color: white;
  border: 6px solid white;
  border-radius: 90px;
  overflow: hidden;
  * {
    height: 100%;
    width: 100%;
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

const ProfileHero = styled.div`
  height: ${sizes.profileHeroHeight};
  background-color: ${colors.profileHero};
  display: flex;
  flex-direction: row;
`;

const AvatarWrapper = styled.div`
  align-self: flex-end;
  width: ${sizes.avatarSize};
  position: relative;
  margin-left: 20px;
`;

const ProfileName = styled.div`
  color: ${colors.white};
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  align-self: flex-end;
  font-size: 24px;
`;

const NavRow = styled.div`
  background-color: ${colors.white};
  height: ${sizes.navbarHeight};
`;

function TimelineTopSection({ webid }) {
  const decodedWebID = decodeURIComponent(webid);
  return (
    <div>
      <ProfileHero>
        <AvatarWrapper>
          <AvatarReal>
            <Image src={`[${decodedWebID}].image`} />
          </AvatarReal>
        </AvatarWrapper>
        <ProfileName>
          <Value src={`[${decodedWebID}].name`} />
        </ProfileName>
      </ProfileHero>
      <NavRow>
        <SectionHeader>
          <Link to={`/${webid}/`}>
            <SectionHeaderItem>About</SectionHeaderItem>
          </Link>
          <Link to={`/${webid}/friends/`}>
            <SectionHeaderItem>Friends</SectionHeaderItem>
          </Link>
        </SectionHeader>
      </NavRow>
    </div>
  );
}

TimelineTopSection.propTypes = {
  webid: PropTypes.string.isRequired,
};

export default TimelineTopSection;
