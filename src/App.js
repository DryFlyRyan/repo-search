import React, { useReducer, useState } from 'react';
import './App.css';

import { searchRepositories } from './data/asyncMethods';
import { combinedReducer, updateStore } from './data/reducers';

import {
  Search,
  ResultList,
} from './components';

import { MainPortal } from './App.styles';

function App() {
  const [
    {
      repositories,
    },
    dispatch
  ] = useReducer(combinedReducer, updateStore())

  const [searchPhrase, updateSearchPhrase] = useState('');
  const [isSearching, updateIsSearching] = useState(false);

  const handleSubmit = async () => {
    updateIsSearching(true);
    const response = await (searchRepositories(searchPhrase));
    dispatch({ type: 'updateRepositories', payload: { repositories: response }});
    updateIsSearching(false);
  }

  console.log('store', !repositories.items)

  return (
    <div className="App">
      <Search
        searchPhrase={searchPhrase}
        onChange={e => updateSearchPhrase(e.target.value)}
        onSubmit={handleSubmit}
      />
      <MainPortal>
        {
          !!repositories.items.length &&
          <ResultList
            results={repositories.items}
          />
        }
      </MainPortal>
    </div>
  );
}

export default App;
