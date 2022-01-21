const { Router, response } = require('express');
const { Types } = require('mongoose');

const UserSchema = require('../models/user');

const router = Router();

router.patch('/', (req, res) => {
  if (!req.session.isAuthenticated) {
    response.status(400);
  } else {
    res.json({
      todos: req.session.user.todos,
    });
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const user = await UserSchema.findById(req.session.user._id);
  const todo = {
    label: req.body.label,
    _id: Types.ObjectId(),
  };

  user.todos = [...user.todos, todo];
  await user.save();
  res.status(201).json({ _id: todo._id, label: todo.label });
});

router.put('/:id', async (req, res) => {
  const { done, inProgres } = req.body;
  const { id } = req.params;
  let newTodos;
  try {
    const user = await UserSchema.findById(req.session.user._id);
    if (done) {
      newTodos = user.todos.map((el) =>
        el._id.toString() === id ? { ...el._doc, done: !el.done } : el
      );
    }
    if (inProgres) {
      newTodos = user.todos.map((el) =>
        el._id.toString() === id ? { ...el._doc, inProgres: !el.inProgres } : el
      );
    }
    user.todos = newTodos;
    await user.save();
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserSchema.findById(req.session.user._id);

    const newTodos = user.todos.filter((el) => {
      return el._id.toString() !== id;
    });
    user.todos = newTodos;
    await user.save();
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});
module.exports = router;
