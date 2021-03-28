'use strict';

const express = require('express');

const app = express();

const NotFound = require('./error-handlers/404.js');
const ErrorHandler = require('./error-handlers/500.js');

app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/bad' , (req,res) =>
  {
      throw new error('Page Error');
  })

  function start(port) {
    app.listen(port, () => console.log(`Server is up on ${port}`));
  }

  app.use('*',NotFound);
  app.use(ErrorHandler);

  module.exports =
  {
    start:start,
    app: app,
  };



