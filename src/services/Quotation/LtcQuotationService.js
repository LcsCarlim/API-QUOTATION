const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class LtcQuotationService {
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

    const LTC = {
      code: json.LTCBRL.code,
      bid: toBRL(json.LTCBRL.bid),
      high: toBRL(json.LTCBRL.high),
      low: toBRL(json.LTCBRL.low),
      create_date: json.LTCBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.create(LTC);

    return {
      LTC

    };
  };
};
