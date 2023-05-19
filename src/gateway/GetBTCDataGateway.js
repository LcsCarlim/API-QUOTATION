const fetch = require('node-fetch');

const dotenv = require('dotenv');

dotenv.config();

const API = process.env.API_DAYS;

module.exports = async () => {
  return fetch(`${API}/BTC-BRL/7`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    }
  });
};
