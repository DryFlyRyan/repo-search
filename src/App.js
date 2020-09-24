import React, { useReducer, useState } from 'react';

import { searchRepositories } from './data/asyncMethods';
import { combinedReducer, updateStore } from './data/reducers';

import {
  Search,
  ResultList,
} from './components';

import { MainPortal } from './App.styles';

function App() {
  const [
    { repositories },
    dispatch
  ] = useReducer(combinedReducer, updateStore())

  const [previousSearchQuery, updatePreviousSearchQuery] = useState('')
  const [searchQuery, updateSearchQuery] = useState('');
  const [isSearching, updateIsSearching] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [resultsPerPage, updateResultsPerPage] = useState(10);

  const searchRepos = async ({
    page = currentPage,
  } = {}) => {
    if (searchQuery === '') {
      return;
    }

    const searchPage = searchQuery === previousSearchQuery ? page : 1;
    updateCurrentPage(searchPage)
    updateIsSearching(true);
    const response = await searchRepositories({
      q: searchQuery,
      page: searchPage,
      per_page: resultsPerPage,
    });
    updatePreviousSearchQuery(searchQuery)
    dispatch({ type: 'updateRepositories', payload: { repositories: response }});
    updateIsSearching(false);
  }

  const changePage = (page) => {
    updateCurrentPage(page);
    searchRepos({
      page,
    });
  }

  return (
    <div className="App">
      <Search
        isSearching={isSearching}
        searchQuery={searchQuery}
        onChange={e => updateSearchQuery(e.target.value)}
        searchRepos={searchRepos}
      />
      <MainPortal>
        {
          !!repositories.items.length &&
          <ResultList
            resultCount={repositories.total_count}
            results={repositories.items}
            currentPage={currentPage}
            changePage={changePage}
          />
        }
      </MainPortal>
    </div>
  );
}

export default App;
