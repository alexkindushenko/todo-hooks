const initialState = {
  todos: [
    { label: 'Drink Coffee', inProgres: false, done: true, id: 1 },
    { label: 'Make Awesome App', inProgres: true, done: false, id: 2 },
    { label: 'Have a lunch', inProgres: false, done: false, id: 3 },
  ],
  visibleTodos: [
    { label: 'Drink Coffee', inProgres: false, done: true, id: 1 },
    { label: 'Make Awesome App', inProgres: true, done: false, id: 2 },
    { label: 'Have a lunch', inProgres: false, done: false, id: 3 },
  ],
};
export default initialState;
