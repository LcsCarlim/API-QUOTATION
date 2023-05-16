const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class DogeQuotationService {
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

    const DOGE = {
      code: json.DOGEBRL.code,
      bid: toBRL(json.DOGEBRL.bid),
      high: toBRL(json.DOGEBRL.high),
      low: toBRL(json.DOGEBRL.low),
      create_date: json.DOGEBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.create(DOGE);

    return {
      DOGE

    };
  };
};
