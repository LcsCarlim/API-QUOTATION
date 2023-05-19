const fetch = require('node-fetch');

const dotenv = require('dotenv');

dotenv.config();

const API = process.env.API_DAYS_LTC;

module.exports = async () => {
  return fetch(API, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    }
  });
};
