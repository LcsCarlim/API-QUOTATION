const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class GetQuotationService {
  constructor () {}

  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const USD = {
      code: json.USDBRL.code,
      name: 'Dólar-Americano',
      bid: toBRL(json.USDBRL.bid),
      high: toBRL(json.USDBRL.high),
      low: toBRL(json.USDBRL.low),
      pctChange: Number(json.USDBRL.pctChange),
      create_date: json.USDBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/usdt.png'
    };

    const CAD = {
      code: json.CADBRL.code,
      name: 'Dólar-Canadense',
      bid: toBRL(json.CADBRL.bid),
      high: toBRL(json.CADBRL.high),
      low: toBRL(json.CADBRL.low),
      pctChange: Number(json.CADBRL.pctChange),
      create_date: json.CADBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/dolar-canadense.png'
    };

    const EUR = {
      code: json.EURBRL.code,
      name: 'Euro',
      bid: toBRL(json.EURBRL.bid),
      high: toBRL(json.EURBRL.high),
      low: toBRL(json.EURBRL.low),
      pctChange: Number(json.EURBRL.pctChange),
      create_date: json.EURBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/eurr.png'
    };

    const BTC = {
      code: json.BTCBRL.code,
      name: 'Bitcoin',
      bid: toBRL(json.BTCBRL.bid),
      high: toBRL(json.BTCBRL.high),
      low: toBRL(json.BTCBRL.low),
      pctChange: Number(json.BTCBRL.pctChange),
      create_date: json.BTCBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/Bitcoin.svg.webp'
    };

    const ETH = {
      code: json.ETHBRL.code,
      name: 'Ethereum',
      bid: toBRL(json.ETHBRL.bid),
      high: toBRL(json.ETHBRL.high),
      low: toBRL(json.ETHBRL.low),
      pctChange: Number(json.ETHBRL.pctChange),
      create_date: json.ETHBRL.create_date,
      // account_id: user_id,
      image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
    };

    const LTC = {
      code: json.LTCBRL.code,
      name: 'Litecoin',
      bid: toBRL(json.LTCBRL.bid),
      high: toBRL(json.LTCBRL.high),
      low: toBRL(json.LTCBRL.low),
      pctChange: Number(json.LTCBRL.pctChange),
      create_date: json.LTCBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/litecoin.png'
    };

    const DOGE = {
      code: json.DOGEBRL.code,
      name: 'Dogecoin',
      bid: toBRL(json.DOGEBRL.bid),
      high: toBRL(json.DOGEBRL.high),
      low: toBRL(json.DOGEBRL.low),
      pctChange: Number(json.DOGEBRL.pctChange),
      create_date: json.DOGEBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/Dogecoin_Logo.png'
    };

    await QuotationModel.insertMany([USD, CAD, EUR, BTC, ETH, LTC, DOGE]);

    return [
      USD, CAD, EUR, BTC, ETH, LTC, DOGE
    ];
  };
};
