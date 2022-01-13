import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TodoContext from '../helpers/todo-context';
import TodoItem from './todo-item';

const TodoList = ({ onDone, onInProgres, onDelete }) => {
  const state = useContext(TodoContext);
  if (state.visibleTodos) {
    return (
      <ul>
        {state.visibleTodos.map((el) => (
          <TodoItem
            label={el.label}
            key={el.id}
            done={el.done}
            inProgres={el.inProgres}
            onLabelClick={() => onDone(el.id)}
            onInProgres={() => onInProgres(el.id)}
            onDelete={() => onDelete(el.id)}
          />
        ))}
      </ul>
    );
  } else {
    <p>Loading...</p>;
  }
};

TodoList.propTypes = {
  onDone: PropTypes.func.isRequired,
  onInProgres: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
