import React, { useContext } from 'react';
import TodoContext from '../helpers/todo-context';

const Logout = () => {
  const { dispatch } = useContext(TodoContext);

  return (
    <p className="logout" onClick={() => dispatch({ type: 'onLogout' })}>
      Logout
    </p>
  );
};

export default Logout;
