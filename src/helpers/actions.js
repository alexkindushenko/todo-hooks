export const onSearch = (state, str) => {
  if (str) {
    return {
      ...state,
      visibleTodos: state.todos.filter((el) =>
        el.label.toLowerCase().includes(str.toLowerCase()) ? el : null
      ),
      filterButtons: [
        { label: 'ALL', active: true },
        { label: 'INP', active: false },
        { label: 'END', active: false },
      ],
    };
  } else {
    return { ...state, visibleTodos: state.todos };
  }
};

export const onFilter = (state, filter) => {
  if (filter === 'END')
    return {
      ...state,
      visibleTodos: state.todos.filter((el) => el.done),
      filterButtons: state.filterButtons.map((el) => ({
        ...el,
        active: el.label === 'END' ? true : false,
      })),
    };

  if (filter === 'INP')
    return {
      ...state,
      visibleTodos: state.todos.filter((el) => el.inProgres),
      filterButtons: state.filterButtons.map((el) => ({
        ...el,
        active: el.label === 'INP' ? true : false,
      })),
    };
  return {
    ...state,
    visibleTodos: state.todos,
    filterButtons: [
      { label: 'ALL', active: true },
      { label: 'INP', active: false },
      { label: 'END', active: false },
    ],
  };
};

export const addTodo = (state, { _id, label }) => {
  const newTodo = {
    label,
    inProgres: false,
    done: false,
    _id,
  };

  return {
    ...state,
    filterButtons: [
      { label: 'ALL', active: true },
      { label: 'INP', active: false },
      { label: 'END', active: false },
    ],

    todos: [...state.todos, newTodo],
    visibleTodos: [...state.todos, newTodo],
  };
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
