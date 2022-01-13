import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ label, done, inProgres, onDone, onInProgres, onDelete }) => {
  return (
    <div className="todo-item">
      <li className={done ? ' done ' : inProgres ? ' in-progres ' : ''} onClick={onDone}>
        {label}
      </li>
      <button onClick={onDelete}>DEL</button>
      <button onClick={onInProgres} disabled={done}>
        INP
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  onDone: PropTypes.func.isRequired,
  onInProgres: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  inProgres: PropTypes.bool.isRequired,
};

export default TodoItem;
