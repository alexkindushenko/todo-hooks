const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const config = require('config');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// const UserSchema = require('./models/user');

const app = express();

const { MONGO_URI, PORT } = config.get('dbConfig');
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGO_URI,
});

app.use(
  session({
    secret: 'secret key11',
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//for dev
app.get('*', (req, res) => {
  if (!req.session.isAuthenticated) {
    res.json({ isAuth: false });
  } else {
    console.log(req.session);
    res.json({
      todos: req.session.user.todos,
    });
  }
});

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/home'));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    app.listen(PORT, () => {
      console.log(`Server runing on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
