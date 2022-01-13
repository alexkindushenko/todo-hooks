import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch, onFilter }) => {
  return (
    <div className="search">
      <input onChange={(e) => onSearch(e.target.value)} />
      <div>
        <button onClick={() => onFilter('all')}>ALL</button>
        <button onClick={() => onFilter('inp')}>INP</button>
        <button onClick={() => onFilter('end')}>END</button>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Search;
