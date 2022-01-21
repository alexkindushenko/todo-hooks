import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import TodoContext from './helpers/todo-context';
import reducer from './helpers/reducer';
import initialState from './helpers/state';

import './app.css';

import App from './components/app';

const AppContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <App />
    </TodoContext.Provider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
