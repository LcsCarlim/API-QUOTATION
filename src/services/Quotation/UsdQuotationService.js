const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class UsdQuotationService {
  constructor () {}
  async execute () {
    // const maxRequests = 10;

    // const request = await QuotationModel.find({
    //   account_id: user_id,
    //   create_date: { $gte: new Date() - 10 * 60 * 1000 }
    // });
    // if (request.length > maxRequests) throw new Error('Too many requests');

    const response = await getCurrencyGateway();

    const json = await response.json();

    const USD = {
      code: json.USDBRL.code,
      bid: toBRL(json.USDBRL.bid),
      high: toBRL(json.USDBRL.high),
      low: toBRL(json.USDBRL.low),
      pctChange: Number(json.USDBRL.pctChange),
      create_date: json.USDBRL.create_date
      // account_id: user_id
    };

    await QuotationModel.create(USD);

    return {
      USD

    };
  };
};
