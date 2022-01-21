module.exports = (req, res, next) => {
  const { email, password } = req.body;

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegexp.test(email) || password.length < 6) {
    return res.json({ message: 'Incorrect data. Check the data entered.' });
  } else {
    next();
  }
};
