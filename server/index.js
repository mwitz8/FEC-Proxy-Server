const express = require('express');
const app = require('./app.js');

const port = 3333;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

module.exports = app;