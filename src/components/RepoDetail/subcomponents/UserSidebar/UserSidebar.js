import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  faUserFriends,
  faStar,
  faBuilding,
  faLink,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { truncateNumber } from '../../../../utils';
import { ryanDetails, danDetails } from './_mockUser';

import {
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
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      },
    updateUser,
  ] = useState(danDetails);

  return (
    <SidebarContainer >
      <AvatarContainer>
        <AvatarImage
          src={avatar_url}
        />
      </AvatarContainer>
      <UserDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <HandleContainer>{login}</HandleContainer>
      </UserDetailsContainer>
      <BioContainer>
        <BioText>{bio}</BioText>
      </BioContainer>
      <GithubStatsContainer>
        <StatIcon icon={faUserFriends}/>
        <StatItem>
          <strong>
            {truncateNumber(followers)}
          </strong>
          {` followers`}
        </StatItem>
        •
        <StatItem>
          <strong>
            {truncateNumber(following)}
          </strong>
          {` following`}
        </StatItem>
        •
        <StatIcon icon={faStar}/>
        <StatItem>
          <strong>
            {following.toLocaleString('en-US')}
          </strong>
        </StatItem>
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
    </SidebarContainer>
  );
}



export default UserSidebar;
