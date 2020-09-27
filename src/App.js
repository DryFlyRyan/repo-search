// external
import React, { useReducer, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

// internal
import { searchRepositories } from 'AsyncMethods';
import { combinedReducer, updateStore } from 'Reducers';

import {
  Search,
  RepoDetail,
  ResultList,
} from 'Components';

import { MainPortal } from './App.styles';

function App() {
  const [{ repositories }, dispatch] = useReducer(combinedReducer, updateStore())
  const [previousSearchQuery, updatePreviousSearchQuery] = useState('')
  const [searchQuery, updateSearchQuery] = useState('');
  const [isSearching, updateIsSearching] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [searchSort, updateSearchSort] = useState({ value: '', label: 'Best Match'},);
  const [searchOrder, updateSearchOrder] = useState({ value: 'desc', label: 'Descending'},) 

  const history = useHistory();

  const searchRepos = async ({
    page = currentPage,
    order = searchOrder.value,
    sort = searchSort.value,
  } = {}) => {
    if (searchQuery === '') {
      return;
    }

    const searchPage = searchQuery === previousSearchQuery ? page : 1;
    updateCurrentPage(searchPage)
    updateIsSearching(true);

    if (window.location.pathname !== '/') {
      history.push('/')
    }

    const response = await searchRepositories({
      q: searchQuery,
      page: searchPage,
      per_page: 10,
      order,
      sort,
    });
    updatePreviousSearchQuery(searchQuery)
    dispatch({ type: 'updateRepositories', payload: { repositories: response }});
    updateIsSearching(false);
  }

  const handleSearchOrderChange = (selection) => {
    updateCurrentPage(1);
    updateSearchOrder(selection);
    if (searchQuery) {
      searchRepos({ order: selection.value })
    }
  }

  const handleSearchSortChange = (selection) => {
    updateCurrentPage(1);
    updateSearchSort(selection);

    if (searchQuery) {
      searchRepos({ sort: selection.value })
    }

  }

  const changePageNumber = (page) => {
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
          searchOrder={searchOrder}
          searchSort={searchSort}
          onOrderChange={handleSearchOrderChange}
          onSortChange={handleSearchSortChange}

        />
        <MainPortal>
          <Switch>
            <Route exact path="/">
              {
                !!repositories.items.length &&
                <ResultList
                  resultCount={repositories.total_count}
                  results={repositories.items}
                  currentPage={currentPage}
                  changePageNumber={changePageNumber}
                />
              }
            </Route>
            <Route path="/:ownerLogin/:repoName">
              <RepoDetail
                results={repositories.items}
              />
            </Route>
          </Switch>
        </MainPortal>
    </div>
  );
}

export default App;
