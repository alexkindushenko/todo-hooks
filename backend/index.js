const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8888,
  MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todoDB',
  SESS_KEY = process.env.SESS_KEY || 'ukhjkyuiry7uypuigghfgfu';

const store = new MongoStore({
  collection: 'sessions',
  uri: MONGO_URI,
});
app.use(cors());
app.use(
  session({
    secret: SESS_KEY,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));

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
