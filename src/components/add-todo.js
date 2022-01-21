import React, { useState, useContext } from 'react';

import { addItem } from '../helpers/todo-service';
import TodoContext from '../helpers/todo-context';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(TodoContext);

  const onHandleAdd = (value) => {
    addItem({ label: value }).then(({ data }) => dispatch({ type: 'addTodo', payload: data }));

    setValue('');
  };

  return (
    <form className="add-todo">
      <input onChange={(e) => setValue(() => e.target.value)} value={value} />
      <button type="submit" disabled={!value.trim()} onClick={() => onHandleAdd(value)}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
