import fetch from 'node-fetch';

import dotenv from 'dotenv'

dotenv.config()

const API = process.env.API;

export function getCurrencyGateway() {
    return fetch(`${API}`, { 
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Accept-Charset": "utf-8",
      }
    });
};