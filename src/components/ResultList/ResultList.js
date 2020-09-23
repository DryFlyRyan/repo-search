import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ResultCard from '../ResultCard/ResultCard';

import { StyledResultListContainer } from './ResultList.styles';

const buildResults = (results) => results.map((result) => (
  <ResultCard
    result={result}
    key={result.id}
  />
))

const ResultList = ({
  results,
}) => {
  const ResultCards = useMemo(() => buildResults(results), [results])
  return (
    <StyledResultListContainer>
      {ResultCards}
    </StyledResultListContainer>
  )
}

ResultList.propTypes = {
  results: PropTypes.shape().isRequired,
};

export default ResultList;
