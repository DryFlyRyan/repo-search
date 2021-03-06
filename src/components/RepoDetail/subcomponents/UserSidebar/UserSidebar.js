import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  faUserFriends,
  faStar,
  faBuilding,
  faLink,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { truncateNumber } from 'Utils';
import { getUser } from 'AsyncMethods';
// import { ryanDetails, danDetails } from './_mockUser';

import {
  TopSectionContainer,
  BulletSpan,
  SidebarContainer,
  AvatarContainer,
  AvatarImage,
  UserDetailsContainer,
  BioContainer,
  NameContainer,
  HandleContainer,
  BioText,
  GithubStatsContainer,
  StatIcon,
  StatItem,
  PersonalStatsContainer,
  PersonalStatsIcon,
  PersonalStatsLine,
  PersonalStatsItem,
  StatContainer,
  BottomSectionContainer,
} from './UserSidebar.styles';

const UserSidebar = ({
  ownerLogin,
}) => {
  const 
    [
      {
        login,
        avatar_url,
        name,
        company,
        blog,
        location,
        email,
        bio,
        followers,
        following,
        ...rest
      },
    updateUser,
  ] = useState({});


  useEffect(() => {
    (async () => {
      const fetchedUser = await getUser({ ownerLogin });
      updateUser(fetchedUser);
    })()
  }, [ownerLogin])

  if (!Object.keys(rest).length) {
    return null;
  }

  return (
    <SidebarContainer >
      <TopSectionContainer>

        <AvatarContainer>
          <AvatarImage
            src={avatar_url}
          />
        </AvatarContainer>

        <UserDetailsContainer>
          <NameContainer>{name}</NameContainer>
          <HandleContainer>{login}</HandleContainer>
        </UserDetailsContainer>
      </TopSectionContainer>
      <BottomSectionContainer>
        <BioContainer>
          <BioText>{bio}</BioText>
        </BioContainer>
        <GithubStatsContainer>
          <StatContainer>
            <StatIcon icon={faUserFriends}/>
            <StatItem>
              <strong>
                {truncateNumber(followers)}
              </strong>
              {` followers`}
            </StatItem>
          </StatContainer>
          <BulletSpan>
            •
          </BulletSpan>
          <StatContainer>
            <StatItem>
              <strong>
                {truncateNumber(following)}
              </strong>
              {` following`}
            </StatItem>
          </StatContainer>
          <BulletSpan>
            •
          </BulletSpan>
          <StatContainer>
            <StatIcon icon={faStar}/>
            <StatItem>
              <strong>
                {following.toLocaleString('en-US')}
              </strong>
            </StatItem>
          </StatContainer>
        </GithubStatsContainer>
        <PersonalStatsContainer>
          {company &&
            <PersonalStatsLine>
              <PersonalStatsIcon icon={faBuilding} />
              <PersonalStatsItem>{company}</PersonalStatsItem>
            </PersonalStatsLine>
          }
          {location &&
            <PersonalStatsLine>
              <PersonalStatsIcon icon={faMapMarkerAlt} />
              <PersonalStatsItem>{location}</PersonalStatsItem>
            </PersonalStatsLine>
          }
          {email &&
            <PersonalStatsLine>
              <PersonalStatsIcon icon={faEnvelope} />
              <PersonalStatsItem>{email}</PersonalStatsItem>
            </PersonalStatsLine>
          }
          {blog &&
            <PersonalStatsLine>
              <PersonalStatsIcon icon={faLink} />
              <PersonalStatsItem>{blog}</PersonalStatsItem>
            </PersonalStatsLine>
          }
        </PersonalStatsContainer>
      </BottomSectionContainer>
    </SidebarContainer>
  );
}

UserSidebar.propTypes = {
  ownerLogin: PropTypes.string.isRequired,
}


export default UserSidebar;
