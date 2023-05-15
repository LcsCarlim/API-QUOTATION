const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const mongoose = require('mongoose');
const mime = require('mime-types');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerDocs));

app.use((req, res, next) => {
  const filePath = req.url.split('?')[0]; // Remove a query string da URL, se houver
  const mimeType = mime.contentType(filePath);
  if (mimeType) {
    res.set('Content-Type', mimeType);
  }
  next();
});

app.use(routes);

module.exports = { app, open };
