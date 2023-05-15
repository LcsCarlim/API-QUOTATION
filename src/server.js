require('dotenv').config();
const config = require('.');
const express = require('express');
const path = require('path');
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

    // Configurar o diretório de arquivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Roteamento
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.listen(3333, () => {
      console.log('Server is running!');
    });
  });
} catch (error) {
  console.log(error.message);
}
