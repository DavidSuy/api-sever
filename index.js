'use strict';

const server = require('./src/server');
const { db } = require('./src/models');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
