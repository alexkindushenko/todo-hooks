import React, { useState } from 'react';

import { sendRegisterForm } from '../helpers/todo-service';

const Register = () => {
  const [email, setEmail] = useState(''.trim());
  const [password, setPassword] = useState(''.trim());
  const [confirmPassword, setConfirmPassword] = useState(''.trim());
  const [error, setError] = useState(null);
  const [isRegister, setIsRegister] = useState(false);

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onRegister = (email, password, confirmPassword) => {
    if (emailRegexp.test(email)) {
      if (password >= 6 && password === confirmPassword) {
        sendRegisterForm({ email, password }).then(({ status }) =>
          status === 201 ? setIsRegister(true) : setError('E-mail already in use.')
        );
      } else {
        return setError('Passwords must match and be longer than 6 characters.');
      }
    } else {
      return setError('Incorrect email.');
    }
  };

  return (
    <form className="register">
      {isRegister ? null : <p>{error}</p>}

      <input type="email" placeholder="email" onChange={(e) => setEmail(() => e.target.value)} />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(() => e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(() => e.target.value)}
      />
      <button type="button" onClick={() => onRegister(email, password, confirmPassword)}>
        Register
      </button>
    </form>
  );
};

export default Register;
