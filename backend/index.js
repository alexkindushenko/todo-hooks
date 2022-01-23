const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const config = require('config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

const { MONGO_URI, PORT } = config.get('dbConfig');
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGO_URI,
});
app.use(cors());
app.use(
  session({
    secret: 'secret key11',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(cookieParser());
app.use(express.json());
// dev
// app.use((req, res, next) => {
//   setTimeout(() => next(), 1000);
// });
//-----

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
