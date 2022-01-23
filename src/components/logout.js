import React, { useContext } from 'react';

import TodoContext from '../helpers/todo-context';
import { userLogout } from '../helpers/todo-service';

const Logout = () => {
  const { dispatch } = useContext(TodoContext);

  return (
    <button
      className="logout"
      onClick={() => userLogout().then(() => dispatch({ type: 'onLogout' }))}
    >
      Logout
    </button>
  );
};

export default Logout;
