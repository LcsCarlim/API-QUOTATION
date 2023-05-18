const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const ApiImg = process.env.API_IMG_BTC;

module.exports = async () => {
  const response = await fetch(ApiImg);
  const imageBuffer = await response.buffer();
  return imageBuffer;
};
