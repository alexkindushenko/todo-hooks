import React, { useContext } from 'react';
import TodoContext from '../helpers/todo-context';

const AppHeader = () => {
  const { todos } = useContext(TodoContext).state;
  const done = todos.filter((el) => (el.done ? el : null)).length;
  if (todos) {
    return (
      <div className="app-header">
        <h1>Todo List</h1>
        <p>{`All ${todos.length} done ${done}`}</p>
      </div>
    );
  } else null;
};

export default AppHeader;
