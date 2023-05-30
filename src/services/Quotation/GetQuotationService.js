const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
// const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class GetQuotationService {
  constructor () {}

  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const USD = {
      code: json.USDBRL.code,
      name: 'Dólar-Americano',
      bid: Number(json.USDBRL.bid),
      high: Number(json.USDBRL.high),
      low: Number(json.USDBRL.low),
      pctChange: Number(json.USDBRL.pctChange),
      create_date: json.USDBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/usdt.png'
    };

    const CAD = {
      code: json.CADBRL.code,
      name: 'Dólar-Canadense',
      bid: Number(json.CADBRL.bid),
      high: Number(json.CADBRL.high),
      low: Number(json.CADBRL.low),
      pctChange: Number(json.CADBRL.pctChange),
      create_date: json.CADBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/dolar-canadense.png'
    };

    const EUR = {
      code: json.EURBRL.code,
      name: 'Euro',
      bid: Number(json.EURBRL.bid),
      high: Number(json.EURBRL.high),
      low: Number(json.EURBRL.low),
      pctChange: Number(json.EURBRL.pctChange),
      create_date: json.EURBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/eurr.png'
    };

    const BTC = {
      code: json.BTCBRL.code,
      name: 'Bitcoin',
      bid: Number(json.BTCBRL.bid),
      high: Number(json.BTCBRL.high),
      low: Number(json.BTCBRL.low),
      pctChange: Number(json.BTCBRL.pctChange),
      create_date: json.BTCBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/Bitcoin.svg.webp'
    };

    const ETH = {
      code: json.ETHBRL.code,
      name: 'Ethereum',
      bid: Number(json.ETHBRL.bid),
      high: Number(json.ETHBRL.high),
      low: Number(json.ETHBRL.low),
      pctChange: Number(json.ETHBRL.pctChange),
      create_date: json.ETHBRL.create_date,
      // account_id: user_id,
      image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880'
    };

    const LTC = {
      code: json.LTCBRL.code,
      name: 'Litecoin',
      bid: Number(json.LTCBRL.bid),
      high: Number(json.LTCBRL.high),
      low: Number(json.LTCBRL.low),
      pctChange: Number(json.LTCBRL.pctChange),
      create_date: json.LTCBRL.create_date,
      // account_id: user_id,
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/litecoin.png'
    };

    const DOGE = {
      code: json.DOGEBRL.code,
      name: 'Dogecoin',
      bid: Number(json.DOGEBRL.bid),
      high: Number(json.DOGEBRL.high),
      low: Number(json.DOGEBRL.low),
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
