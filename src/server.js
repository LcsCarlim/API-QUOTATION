const config = require('./index.js');

try {
  config.open('mongodb://localhost/quotationapi').then(() => {
    config.app.listen(3333, () => {
      console.log('Server is running!');
    });
  });
} catch (error) {
  console.log(error.message);
};
