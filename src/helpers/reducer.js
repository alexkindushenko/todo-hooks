import { onSearch, onFilter, addTodo, onDone, onInProgres, onDelete, fetchTodos } from './actions';

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'unAuthorized':
      return {
        ...state,
        isLoading: false,
      };
    case 'onLogout':
      return {
        ...state,
        todos: [],
        visibleTodos: [],
        isAuth: false,
      };
    case 'onRegister':
      return {
        ...state,
        isAuth: true,
      };
    case 'onLogin':
      return {
        ...state,
        isAuth: true,
      };
    case 'fetchTodosRequest':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'fetchTodosError':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'fetchTodosSucces':
      return {
        ...state,
        todos: fetchTodos(action.payload),
        visibleTodos: fetchTodos(action.payload),
        isLoading: false,
        isAuth: true,
        isError: false,
      };
    case 'onSerarch':
      return onSearch(state, action.payload);

    case 'onFilter':
      return onFilter(state, action.payload);

    case 'addTodo':
      return addTodo(state, action.payload);

    case 'onDone':
      return {
        ...state,
        todos: onDone(state, action.payload),
        visibleTodos: onDone(state, action.payload),
      };
    case 'onInProgres':
      return {
        ...state,
        todos: onInProgres(state, action.payload),
        visibleTodos: onInProgres(state, action.payload),
      };
    case 'onDelete':
      return {
        ...state,
        todos: onDelete(state, action.payload),
        visibleTodos: onDelete(state, action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
