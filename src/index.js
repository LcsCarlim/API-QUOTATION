const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const mongoose = require('mongoose');
const cors = require('cors');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));

app.use(cors());

app.use(routes);

module.exports = { app, open, routes };
