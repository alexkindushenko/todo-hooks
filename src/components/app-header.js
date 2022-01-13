import React, { useContext } from 'react';
import TodoContext from '../helpers/todo-context';

const AppHeader = () => {
  const { todos } = useContext(TodoContext).state;
  const done = todos.filter((el) => (el.done ? el : null)).length;
  return (
    <div className="app-header">
      <h1>Todo List</h1>
      <p>{`All ${todos.length} done ${done}`}</p>
    </div>
  );
};

export default AppHeader;
