import React, { useContext } from 'react';

import TodoContext from '../helpers/todo-context';
import { userLogout } from '../helpers/todo-service';

const Logout = () => {
  const { dispatch } = useContext(TodoContext);

  return (
    <p className="logout" onClick={() => userLogout().then(() => dispatch({ type: 'onLogout' }))}>
      Logout
    </p>
  );
};

export default Logout;
