import React, { useReducer } from 'react';

import TodoContext from '../helpers/todo-context';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Search from './search';
import initialState from '../helpers/state';
import reducer from '../helpers/reducer';
import AppHeader from './app-header';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="todo-app">
      <TodoContext.Provider value={state}>
        <AppHeader />

        <Search
          onSearch={(str) => dispatch({ type: 'onSerarch', payload: str })}
          onFilter={(filter) => dispatch({ type: 'onFilter', payload: filter })}
        />

        <TodoList
          onDone={(id) => dispatch({ type: 'onDone', payload: id })}
          onDelete={(id) => dispatch({ type: 'onDelete', payload: id })}
          onInProgres={(id) => dispatch({ type: 'onInProgres', payload: id })}
        />

        <AddTodo handleAdd={(label) => dispatch({ type: 'addTodo', payload: label })} />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
