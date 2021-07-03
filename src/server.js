'use strict';
const express = require('express');
const app = express();
const foodRouter = require('./routes/food');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());
app.use('/api/v1/person', foodRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};