require('dotenv').config();
const config = require('.');
const express = require('express');
const mime = require('mime');

try {
  config.open(process.env.MONGODB_URI).then(() => {
    const app = express();

    // Definir tipo de conteúdo MIME para arquivos estáticos
    app.use((req, res, next) => {
      const mimeType = mime.getType(req.url);
      if (mimeType) {
        res.setHeader('Content-Type', mimeType);
      }
      next();
    });

    app.listen(3333, () => {
      console.log('Server is running!');
    });
  });
} catch (error) {
  console.log(error.message);
}
