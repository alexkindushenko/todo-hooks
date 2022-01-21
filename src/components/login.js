import React, { useState, useContext } from 'react';

import TodoContext from '../helpers/todo-context';
import App from './app';
import { sendLoginForm } from '../helpers/todo-service';

const Login = () => {
  const {
    state: { isAuth },
    dispatch,
  } = useContext(TodoContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onRegister = (email, password) => {
    if (emailRegexp.test(email)) {
      if (password >= 6) {
        sendLoginForm({ email, password }).then(({ status }) =>
          status === 200
            ? dispatch({ type: 'onLogin' })
            : setError('Incorrect data. Check the data entered.')
        );
      } else {
        return setError('Password must be longer than 6 characters.');
      }
    } else {
      return setError('Incorrect email.');
    }
  };
  if (isAuth) return <App />;
  return (
    <form className="login">
      {<p style={{ textAlign: 'center' }}>{error}</p>}
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(() => e.target.value.trim())}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(() => e.target.value.trim())}
      />
      <button
        type="submit"
        disabled={!email || !password}
        onClick={() => onRegister(email, password)}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
