import React, { useState } from 'react';

import Login from '../components/login';
import Register from '../components/register';
const Auth = () => {
  const [clsLog, setClsLog] = useState('active');
  const [clsReg, setClsReg] = useState('');

  const handleClick = (value) => {
    value ? setClsLog('active') && setClsReg('') : setClsLog('') && setClsReg('active');
  };

  return (
    <div className="auth">
      <div>
        <button onClick={() => handleClick('login')} className={clsLog}>
          Login
        </button>
        <button onClick={() => handleClick('')} className={clsReg}>
          Register
        </button>
      </div>
      {clsLog ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
