import React, { useReducer, useState } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import { searchRepositories } from './data/asyncMethods';
import { combinedReducer, updateStore } from './data/reducers';

import {
  Search,
  RepoDetail,
  ResultList,
} from './components';

import { MainPortal } from './App.styles';

function App() {
  const [{ repositories }, dispatch] = useReducer(combinedReducer, updateStore())
  const [previousSearchQuery, updatePreviousSearchQuery] = useState('')
  const [searchQuery, updateSearchQuery] = useState('');
  const [isSearching, updateIsSearching] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  // const [resultsPerPage, updateResultsPerPage] = useState(10);

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
      per_page: 10,
    });
    updatePreviousSearchQuery(searchQuery)
    dispatch({ type: 'updateRepositories', payload: { repositories: response }});
    updateIsSearching(false);
  }



  const changePageNumber = (page) => {
    updateCurrentPage(page);
    searchRepos({
      page,
    });
  }

  console.log('repos', repositories);

  return (
    <div className="App">
        <Search
          isSearching={isSearching}
          searchQuery={searchQuery}
          onChange={e => updateSearchQuery(e.target.value)}
          searchRepos={searchRepos}
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
