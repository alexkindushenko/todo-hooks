const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const defaultTodos = [
    { label: 'drink coffee' },
    { label: 'make awesome app' },
    { label: 'buy new book' },
  ];

  const candidate = await UserSchema.findOne({ email });
  try {
    if (candidate) {
      res.status(400).json({ message: 'E-mail already in use.' });
    } else {
      const hashPassword = await bcript.hash(password, 10);
      const user = new UserSchema({
        email,
        password: hashPassword,
        todos: defaultTodos,
      });

      user.save();
      res.status(201).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });
    if (candidate) {
      (await bcript.compare(password, candidate.password))
        ? res.end()
        : res.status(400).json({ message: 'Incorrect data. Check the data entered.' });
    } else {
      res.status(400).json({ message: 'Incorrect data. Check the data entered.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});
module.exports = router;