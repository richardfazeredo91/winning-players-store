const express = require('express');
const usersRouter = require('../routes/usersRouter');

const app = express();

app.use(express.json());
app.use('/user', usersRouter);

app.get('/', (_req, res) => {
  res.send();
});

module.exports = app;
