const fs = require('fs');

module.exports = async (req, res) => {
  fs.readFile('../../public/cad.png', (err, data) => {
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
