import React from 'react';

import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Search from '../components/search';
import AppHeader from '../components/app-header';

const TodoApp = () => {
  return (
    <>
      <AppHeader />
      <Search />
      <TodoList />
      <AddTodo />
    </>
  );
};

export default TodoApp;
