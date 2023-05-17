const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class GetQuotationService {
  constructor () {}
  async execute (user_id) {
    // const maxRequests = 10;
    // const now = new Date();
    // const verifyTime = now - 10 * 60 * 1000;

    // const request = await QuotationModel.find({
    //   account_id: user_id,
    //   create_date: { $gte: verifyTime }
    // });
    // console.log(request.lenght);
    // if (request.length > maxRequests) throw new Error('Too many requests');

    const response = await getCurrencyGateway();

    const json = await response.json();

    const USD = {
      code: json.USDBRL.code,
      bid: toBRL(json.USDBRL.bid),
      high: toBRL(json.USDBRL.high),
      low: toBRL(json.USDBRL.low),
      pctChange: Number(json.USDBRL.pctChange),
      create_date: json.USDBRL.create_date,
      account_id: user_id
    };

    const CAD = {
      code: json.CADBRL.code,
      bid: toBRL(json.CADBRL.bid),
      high: toBRL(json.CADBRL.high),
      low: toBRL(json.CADBRL.low),
      pctChange: Number(json.CADBRL.pctChange),
      create_date: json.CADBRL.create_date,
      account_id: user_id
    };

    const EUR = {
      code: json.EURBRL.code,
      bid: toBRL(json.EURBRL.bid),
      high: toBRL(json.EURBRL.high),
      low: toBRL(json.EURBRL.low),
      pctChange: Number(json.EURBRL.pctChange),
      create_date: json.EURBRL.create_date,
      account_id: user_id
    };

    const BTC = {
      code: json.BTCBRL.code,
      bid: toBRL(json.BTCBRL.bid),
      high: toBRL(json.BTCBRL.high),
      low: toBRL(json.BTCBRL.low),
      pctChange: Number(json.BTCBRL.pctChange),
      create_date: json.BTCBRL.create_date,
      account_id: user_id
    };

    const ETH = {
      code: json.ETHBRL.code,
      bid: toBRL(json.ETHBRL.bid),
      high: toBRL(json.ETHBRL.high),
      low: toBRL(json.ETHBRL.low),
      pctChange: Number(json.ETHBRL.pctChange),
      create_date: json.ETHBRL.create_date,
      account_id: user_id
    };

    const LTC = {
      code: json.LTCBRL.code,
      bid: toBRL(json.LTCBRL.bid),
      high: toBRL(json.LTCBRL.high),
      low: toBRL(json.LTCBRL.low),
      pctChange: Number(json.LTCBRL.pctChange),
      create_date: json.LTCBRL.create_date,
      account_id: user_id
    };

    const DOGE = {
      code: json.DOGEBRL.code,
      bid: toBRL(json.DOGEBRL.bid),
      high: toBRL(json.DOGEBRL.high),
      low: toBRL(json.DOGEBRL.low),
      pctChange: Number(json.DOGEBRL.pctChange),
      create_date: json.DOGEBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.insertMany([USD, CAD, EUR, BTC, ETH, LTC, DOGE]);

    return [
      USD, CAD, EUR, BTC, ETH, LTC, DOGE
    ];
  };
};
