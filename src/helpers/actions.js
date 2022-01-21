export const onSearch = (state, str) => {
  if (str) {
    return state.todos.filter((el) =>
      el.label.toLowerCase().includes(str.toLowerCase()) ? el : null
    );
  } else {
    return state.todos;
  }
};

export const onFilter = (state, filter) => {
  if (filter === 'end') return state.todos.filter((el) => el.done);
  if (filter === 'inp') return state.todos.filter((el) => el.inProgres);
  return state.todos;
};

export const addTodo = (state, { _id, label }) => {
  return [
    ...state.todos,
    {
      label,
      inProgres: false,
      done: false,
      _id,
    },
  ];
};

export const onDone = (state, id) => {
  return state.todos.map((el) =>
    el._id === id ? { ...el, done: !el.done, inProgres: false } : el
  );
};

export const onInProgres = (state, id) => {
  return state.todos.map((el) => (el._id === id ? { ...el, inProgres: !el.inProgres } : el));
};

export const onDelete = (state, id) => {
  return state.todos.filter((el) => el._id !== id);
};

export const fetchTodos = (todos) => todos;
