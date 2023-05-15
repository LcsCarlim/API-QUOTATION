require('dotenv').config();
const config = require('.');

try {
  config.open(process.env.MONGODB_URI).then(() => {
    config.app.listen(3333, () => {
      console.log('Server is running!');
    });
  });
} catch (error) {
  console.log(error.message);
};
