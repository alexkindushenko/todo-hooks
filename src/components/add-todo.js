import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import TodoContext from '../helpers/todo-context';

const AddTodo = ({ handleAdd }) => {
  const [value, setValue] = useState('');

  const onHandleAdd = (value) => {
    if (value.trim()) handleAdd(value);

    setValue('');
  };

  return (
    <div className="add-todo">
      <input onChange={(e) => setValue(() => e.target.value)} value={value} />
      <button disabled={!value.trim()} onClick={() => onHandleAdd(value)}>
        Add
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddTodo;
