import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  searchPhrase,
  onChange,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return onSubmit();
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Search for a repo"
        value={searchPhrase}
        onChange={onChange}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  )
};

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
