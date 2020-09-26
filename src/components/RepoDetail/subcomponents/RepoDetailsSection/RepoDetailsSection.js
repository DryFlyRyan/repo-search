import React from 'react';
import PropTypes from 'prop-types';

import {
  faBook,
  faStar,
  faEye,
  faShareAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import { formatDate, truncateNumber } from 'Utils';

import {
  RepoDetailsSectionContainer,
  RepoTitleTextLink,
  RepoTitleContainer,
  RepoTitleIcon,
  RepoStatsContainer,
  StatsLink,
  StatsIcon,
  StatsText,
  DescriptionContainer,
  TechDetailsContainer,
  TechDetailText,
  LanguageDot,
} from './RepoDetailsSection.styles'

const RepoDetailsSection = ({
  repo: {
    stargazers_count,
    description,
    subscribers_count,
    forks,
    open_issues,
    language,
    license,
    created_at,
    updated_at,
    ...repo
  }
}) => {
  return (
    <RepoDetailsSectionContainer>
      <RepoTitleContainer>
        <RepoTitleIcon icon={faBook} />
        <RepoTitleTextLink
          href={`https://github.com/${repo.owner.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.owner.login}
        </RepoTitleTextLink>
        <span>
          /
        </span>
        <RepoTitleTextLink
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </RepoTitleTextLink>
        {}
      </RepoTitleContainer>

      {!!description &&
        <DescriptionContainer>
          {description}
        </DescriptionContainer>
      }

      <TechDetailsContainer>
        <LanguageDot language={language} />
        <TechDetailText>
          {language}
        </TechDetailText>
        {(license && !!Object.keys(license).length) &&
          <TechDetailText>
            {license.name}
          </TechDetailText>
        }
      </TechDetailsContainer>

      <TechDetailsContainer>
        <TechDetailText>
          {formatDate('Created', created_at)}
        </TechDetailText>
        <TechDetailText>
          {formatDate('Updated', updated_at)}
        </TechDetailText>
      </TechDetailsContainer>

      <RepoStatsContainer>
        <StatsLink
          href={`https://github.com/${repo.full_name}/stargazers`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StatsIcon icon={faStar} />
          <StatsText>
            <strong>
              {truncateNumber(stargazers_count)}
            </strong>
            stargazers
          </StatsText>
        </StatsLink>
        <StatsLink
          href={`https://github.com/${repo.full_name}/watchers`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StatsIcon icon={faEye} />
          <StatsText>
            <strong>
              {/*
                You would think this is a mismap, but in the results that
                the GH api is giving back the `watchers_count` is actually
                the same as the `stargazers_count`
              */}
              {truncateNumber(subscribers_count)}
            </strong>
            watchers
          </StatsText>
        </StatsLink>
        <StatsLink
          href={`https://github.com/${repo.full_name}/network/members`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StatsIcon icon={faShareAlt} />
          <StatsText>
            <strong>
              {truncateNumber(forks)}
            </strong>
            forks
          </StatsText>
        </StatsLink>
        <StatsLink
          href={`https://github.com/${repo.full_name}/issues`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StatsIcon icon={faExclamationCircle} />
          <StatsText>
            <strong>
              {truncateNumber(open_issues)}
            </strong>
            open issues
          </StatsText>
        </StatsLink>
      </RepoStatsContainer>
    </RepoDetailsSectionContainer>
  )
}

RepoDetailsSection.propTypes = {
  repo: PropTypes.shape().isRequired,
}

export default RepoDetailsSection;