const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class BtcQuotationService {
  constructor () {}
  async execute (user_id) {
    // const maxRequests = 10;

    // const request = await QuotationModel.find({
    //   account_id: user_id,
    //   create_date: { $gte: new Date() - 10 * 60 * 1000 }
    // });
    // if (request.length > maxRequests) throw new Error('Too many requests');

    const response = await getCurrencyGateway();

    const json = await response.json();

    const BTC = {
      code: json.BTCBRL.code,
      bid: toBRL(json.BTCBRL.bid),
      high: toBRL(json.BTCBRL.high),
      low: toBRL(json.BTCBRL.low),
      pctChange: Number(json.BTCBRL.pctChange),
      create_date: json.BTCBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.create(BTC);

    return {
      BTC

    };
  };
};
