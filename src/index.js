const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const mongoose = require('mongoose');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

module.exports = { app, open };
