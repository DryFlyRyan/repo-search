import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ResultCard from '../ResultCard/ResultCard';

import {
  StyledResultListContainer,
  TopBar,
  CountText,
  PaginationContainer,
  PaginationButton,
} from './ResultList.styles';

const buildResults = (results) => results.map((result) => (
  <ResultCard
    result={result}
    key={result.id}
  />
))

const formatCountText = (resultCount) => {
  const formattedCount = resultCount.toLocaleString('us-EN');
  return `${formattedCount} repository result${resultCount === 1 ? '' : 's'}`
}

const ResultList = ({
  results,
  resultCount,
  currentPage,
  changePage,
}) => {
  const ResultCards = useMemo(() => buildResults(results), [results])
  return (
    <StyledResultListContainer>
      <TopBar>
        <CountText>
          {formatCountText(resultCount)}
        </CountText>
      </TopBar>
      {ResultCards}
      <PaginationContainer>
        <PaginationButton
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          {'< Previous'}
        </PaginationButton>
        <PaginationButton
          onClick={() => changePage(currentPage + 1)}
        >
          {'Next >'}
        </PaginationButton>
      </PaginationContainer>
    </StyledResultListContainer>
  )
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ResultList;
