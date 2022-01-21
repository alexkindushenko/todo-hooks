const { Router } = require('express');
const bcript = require('bcryptjs');

const UserSchema = require('../models/user');
const isValid = require('../midlevare/isValid');
const isAuth = require('../midlevare/isAuth');

const router = Router();

router.post('/register', isValid, async (req, res) => {
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

      await user.save();
      req.session.user = user;
      req.session.isAuthenticated = true;
      req.session.save((err) => {
        err ? res.status(500).json({ message: 'Server error!' }) : res.status(201).end();
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

router.post('/login', isValid, async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await UserSchema.findOne({ email });

    if (candidate) {
      if (await bcript.compare(password, candidate.password)) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;

        req.session.save((err) => {
          err ? res.status(500).json({ message: 'Server error!' }) : res.end();
        });
      } else {
        res.status(400).json({ message: 'Incorrect data. Check the data entered.' });
      }
    } else {
      res.status(400).json({ message: 'Incorrect data. Check the data entered.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

router.patch('/', isAuth, (req, res) => {
  req.session.destroy((err) => {
    err ? res.status(500).json({ message: 'Server error!' }) : res.clearCookie('connect.sid').end();
  });
});
module.exports = router;
