const express = require('express');

const { routes } = require('../src/routes/User.routes');

const { quotationRoutes } = require('./routes/Quotation.routes');

const mongoose = require('mongoose');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

app.use(routes);

app.use('/quotation', quotationRoutes);

module.exports = { app, open, routes };
