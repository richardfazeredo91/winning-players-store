const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send();
});

module.exports = app;
