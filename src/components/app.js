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
      <TodoContext.Provider value={{ state, dispatch }}>
        <AppHeader />

        <Search />

        <TodoList />

        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
