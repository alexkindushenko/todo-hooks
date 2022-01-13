import { onSearch, onFilter, addTodo, onDone, onInProgres, onDelete } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case 'onSerarch':
      return {
        ...state,
        visibleTodos: onSearch(state, action.payload),
      };
    case 'onFilter':
      return {
        ...state,
        visibleTodos: onFilter(state, action.payload),
      };
    case 'addTodo':
      return {
        ...state,
        todos: addTodo(state, action.payload),
        visibleTodos: addTodo(state, action.payload),
      };
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
