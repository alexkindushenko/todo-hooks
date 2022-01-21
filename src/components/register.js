import React, { useState, useContext } from 'react';

import TodoContext from '../helpers/todo-context';
import App from './app';
import { sendRegisterForm } from '../helpers/todo-service';

const Register = () => {
  const {
    state: { isAuth },
    dispatch,
  } = useContext(TodoContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onRegister = (email, password, confirmPassword) => {
    if (emailRegexp.test(email)) {
      if (password >= 6 && password === confirmPassword) {
        sendRegisterForm({ email, password }).then(({ status }) =>
          status === 201 ? dispatch({ type: 'onRegister' }) : setError('E-mail already in use.')
        );
      } else {
        return setError('Passwords must match and be longer than 6 characters.');
      }
    } else {
      return setError('Incorrect email.');
    }
  };
  if (isAuth) return <App />;
  return (
    <form className="register">
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
      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(() => e.target.value.trim())}
      />
      <button
        type="submit"
        disabled={!email || !password || !confirmPassword}
        onClick={() => onRegister(email, password, confirmPassword)}
      >
        Register
      </button>
    </form>
  );
};

export default Register;
