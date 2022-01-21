import React, { useState } from 'react';

import { sendLoginForm } from '../helpers/todo-service';
const Login = () => {
  const [email, setEmail] = useState(''.trim());
  const [password, setPassword] = useState(''.trim());
  const [error, setError] = useState(null);

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onRegister = (email, password) => {
    if (emailRegexp.test(email)) {
      if (password >= 6) {
        sendLoginForm({ email, password }).then(({ status }) =>
          status === 201 ? console.log(true) : setError('Incorrect data. Check the data entered.')
        );
      } else {
        return setError('Password must be longer than 6 characters.');
      }
    } else {
      return setError('Incorrect email.');
    }
  };
  return (
    <form className="login">
      <p>{error}</p>
      <input type="email" placeholder="email" onChange={(e) => setEmail(() => e.target.value)} />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(() => e.target.value)}
      />
      <button type="button" onClick={() => onRegister(email, password)}>
        Login
      </button>
    </form>
  );
};

export default Login;
