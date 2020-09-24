import React from 'react';
import PropTypes from 'prop-types';

import {
  LanguageDisplay,
  Stargazers,
  UpdatedAtDisplay,
} from '../_subcomponents'

import {
  ResultCardContainer,
  IconContainer,
  ContentContainer,
  Title,
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
  },
}) => {
  return (
    <ResultCardContainer>
      <IconContainer>

      </IconContainer>
      <ContentContainer>
        <Title>
          {full_name}
        </Title>
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
