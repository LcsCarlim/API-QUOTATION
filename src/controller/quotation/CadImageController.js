const fs = require('fs');
const path = require('path');
const imagePath = path.join(__dirname, '../../public/cad.png');

module.exports = async (req, res) => {
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      // Em caso de erro ao ler o arquivo
      res.statusCode = 500;
      res.end('Erro ao ler a imagem');
    } else {
      // Defina o cabeçalho Content-Type para imagem PNG
      res.setHeader('Content-Type', 'image/png');
      // Envie o conteúdo da imagem como resposta
      res.end(data);
    }
  });
};
