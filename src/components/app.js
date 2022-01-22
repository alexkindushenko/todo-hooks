import React, { useContext, useEffect } from 'react';

import TodoApp from '../screens/todo-app';
import Auth from '../screens/auth';
import TodoContext from '../helpers/todo-context';
import { getTodoList } from '../helpers/todo-service';

const App = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { isLoading, isAuth, isError } = state;

  useEffect(() => {
    dispatch({ type: 'fetchTodosRequest' });
    getTodoList()
      .then((res) =>
        res.status === 200
          ? dispatch({ type: 'fetchTodosSucces', payload: res.data.todos })
          : dispatch({ type: 'unAuthorized' })
      )
      .catch(() => dispatch({ type: 'fetchTodosError' }));
  }, [dispatch, state.isAuth]);
  if (isError) return <h2>Error fetching data.</h2>;
  return (
    <div className="todo-app">
      {isLoading ? <h2>Loading...</h2> : isAuth ? <TodoApp /> : <Auth />}
    </div>
  );
};

export default App;
