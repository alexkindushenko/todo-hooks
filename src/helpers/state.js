const initialState = {
  todos: [],
  visibleTodos: [],
  isAuth: false,
  isLoading: true,
  isError: false,
  filterButtons: [
    { label: 'ALL', active: true },
    { label: 'INP', active: false },
    { label: 'END', active: false },
  ],
};
export default initialState;
