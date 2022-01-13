import React, { useContext } from 'react';

import TodoContext from '../helpers/todo-context';

const Search = () => {
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="search">
      <input onChange={(e) => dispatch({ type: 'onSerarch', payload: e.target.value })} />
      <div>
        <button onClick={() => dispatch({ type: 'onFilter', payload: 'all' })}>ALL</button>
        <button onClick={() => dispatch({ type: 'onFilter', payload: 'inp' })}>INP</button>
        <button onClick={() => dispatch({ type: 'onFilter', payload: 'end' })}>END</button>
      </div>
    </div>
  );
};

export default Search;
