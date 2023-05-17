const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class EthQuotationService {
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

    const ETH = {
      code: json.ETHBRL.code,
      bid: toBRL(json.ETHBRL.bid),
      high: toBRL(json.ETHBRL.high),
      low: toBRL(json.ETHBRL.low),
      pctChange: Number(json.ETHBRL.pctChange),
      create_date: json.ETHBRL.create_date,
      account_id: user_id
    };

    await QuotationModel.create(ETH);

    return {
      ETH

    };
  };
};
