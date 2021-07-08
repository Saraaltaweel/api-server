'use strict';
const express = require('express');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const cors = require('cors');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');


app.use(express.json());
app.use(logger);
app.use(cors());
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};