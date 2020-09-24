import React from 'react';
import PropTypes from 'prop-types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


import {
  Banner,
  SearchInput,
  HiddenLabel,
  GrowContainer,
  SearchForm,
  LoadingIcon,
} from './Search.styles';

const Search = ({
  searchPhrase,
  onChange,
  searchRepos,
  isSearching,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return searchRepos();
  }

  return (
    <Banner>
      <GrowContainer>
        <SearchForm
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <HiddenLabel>
            <SearchInput
              spellCheck="false"
              autoComplete="off"
              type="text"
              name="search"
              placeholder="Search ..."
              value={searchPhrase}
              onChange={onChange}
            />
            <LoadingIcon
              icon={faSpinner}
              theme={{ isSearching }}
            />
          </HiddenLabel>
        </SearchForm>
      </GrowContainer>
    </Banner>
  )
};

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  searchRepos: PropTypes.func.isRequired,
};

export default Search;
