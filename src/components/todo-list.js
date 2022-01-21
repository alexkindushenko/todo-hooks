import React, { useContext } from 'react';

import { updateItem, deleteItem } from '../helpers/todo-service';
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
            key={el._id}
            done={el.done}
            inProgres={el.inProgres}
            onDone={() =>
              updateItem(el._id, { done: true }).then(({ status }) =>
                status === 200 ? dispatch({ type: 'onDone', payload: el._id }) : null
              )
            }
            onInProgres={() =>
              updateItem(el._id, { inProgres: true }).then(({ status }) =>
                status === 200 ? dispatch({ type: 'onInProgres', payload: el._id }) : null
              )
            }
            onDelete={() =>
              deleteItem(el._id).then(({ status }) =>
                status === 204 ? dispatch({ type: 'onDelete', payload: el._id }) : null
              )
            }
          />
        ))}
      </ul>
    );
  } else {
    <p>Loading...</p>;
  }
};

export default TodoList;
