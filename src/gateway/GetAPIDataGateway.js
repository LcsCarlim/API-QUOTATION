const fetch = require('node-fetch');

const dotenv = require('dotenv');

dotenv.config();

const API = process.env.API;

module.exports = async () => {
  return fetch(`${API}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    }
  });
};
