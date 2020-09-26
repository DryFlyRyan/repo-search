import React from 'react';
import PropTypes from 'prop-types';

import {
  LanguageDisplay,
  Stargazers,
  UpdatedAtDisplay,
} from 'Subcomponents'

import {
  TitleTextLink,
} from 'GlobalStyles';

import {
  ResultCardContainer,
  IconContainer,
  ContentContainer,
  Description,
  Footer,
} from './ResultCard.styles';

const ResultCard = ({
  result: {
    description,
    language,
    license,
    full_name,
    id,
    stargazers_count,
    updated_at,
    owner: { login },
    name,
  },
}) => {
  return (
    <ResultCardContainer>
      <IconContainer>

      </IconContainer>
      <ContentContainer>
        <TitleTextLink to={`/${full_name}`} >
          {full_name}
        </TitleTextLink>
        <Description>
          {description}
        </Description>
        <Footer>
          <Stargazers stargazers_count={stargazers_count} />
          {
            language &&
            <LanguageDisplay language={language} />
          }
          <UpdatedAtDisplay updated_at={updated_at} />
        </Footer>
      </ContentContainer>
    </ResultCardContainer>
  )
}

ResultCard.propTypes = {
  result: PropTypes.shape({
    description: PropTypes.string,
    language: PropTypes.string,
    license: PropTypes.shape(),
    full_name: PropTypes.string,
    id: PropTypes.number,
    stargazers_count: PropTypes.number,
    updated_at: PropTypes.string,
  }).isRequired,
}

export default ResultCard;
