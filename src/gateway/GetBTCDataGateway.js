const fetch = require('node-fetch');

const API = process.env.API_DAYS_BTC;

module.exports = async () => {
  return fetch(API, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    }
  });
};
