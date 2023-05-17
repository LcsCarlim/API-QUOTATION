const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class CadQuotationService {
  constructor () {
  }

  async execute (user_id) {
    // const maxRequests = 10;

    // const request = await QuotationModel.find({
    //   account_id: user_id,
    //   create_date: { $gte: new Date() - 10 * 60 * 1000 }
    // });
    // if (request.length > maxRequests) throw new Error('Too many requests');

    const response = await getCurrencyGateway();

    const json = await response.json();

    const CAD = {
      code: json.CADBRL.code,
      bid: toBRL(json.CADBRL.bid),
      high: toBRL(json.CADBRL.high),
      low: toBRL(json.CADBRL.low),
      pctChange: Number(json.CADBRL.pctChange),
      create_date: json.CADBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.create(CAD);

    return {
      CAD
    };
  };
};
