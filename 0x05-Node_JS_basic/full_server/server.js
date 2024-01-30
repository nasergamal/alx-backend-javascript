const express = require('express');
const routes = require('./routes/index');

const port = 1245;

const app = express();

app.use(routes);

app.listen(port);

module.exports = app;
