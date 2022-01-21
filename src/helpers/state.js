const initialState = {
  todos: [
    { label: 'Drink Coffee', inProgres: false, done: true, _id: 1 },
    { label: 'Make Awesome App', inProgres: true, done: false, _id: 2 },
    { label: 'Have a lunch', inProgres: false, done: false, _id: 3 },
  ],
  visibleTodos: [
    { label: 'Drink Coffee', inProgres: false, done: true, _id: 1 },
    { label: 'Make Awesome App', inProgres: true, done: false, _id: 2 },
    { label: 'Have a lunch', inProgres: false, done: false, _id: 3 },
  ],
  isAuth: false,
  isLoading: true,
  isError: false,
};
export default initialState;
