import React, { useContext } from 'react';

import TodoContext from '../helpers/todo-context';
import TodoItem from './todo-item';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  if (state.visibleTodos) {
    return (
      <ul>
        {state.visibleTodos.map((el) => (
          <TodoItem
            label={el.label}
            key={el.id}
            done={el.done}
            inProgres={el.inProgres}
            onDone={() => dispatch({ type: 'onDone', payload: el.id })}
            onInProgres={() => dispatch({ type: 'onInProgres', payload: el.id })}
            onDelete={() => dispatch({ type: 'onDelete', payload: el.id })}
          />
        ))}
      </ul>
    );
  } else {
    <p>Loading...</p>;
  }
};

export default TodoList;
