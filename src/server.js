'use strict';

const express = require('express');

const carRouter = require('./routes/car');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('hello'));
app.use('/cars', carRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  },
  app,
};
