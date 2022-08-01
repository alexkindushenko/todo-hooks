import React, { useContext } from 'react';

import TodoContext from '../helpers/todo-context';

const Search = () => {
  const {
    state: { filterButtons },
    dispatch,
  } = useContext(TodoContext);

  const handleButtonFilter = (label) => {
    dispatch({ type: 'onFilter', payload: label });
  };

  return (
    <div className="search">
      <input onChange={(e) => dispatch({ type: 'onSerarch', payload: e.target.value })} />
      <div>
        {filterButtons.map((el) => (
          <button
            className={el.active ? 'active' : ''}
            key={el.label}
            onClick={() => handleButtonFilter(el.label)}
          >
            {el.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
