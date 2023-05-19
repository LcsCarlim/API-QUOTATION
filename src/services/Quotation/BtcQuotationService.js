const GetBTCDataGateway = require('../../gateway/GetBTCDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class BtcQuotationService {
  constructor () {}

  async execute () {
    const response = await GetBTCDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.map(async (quotation) => {
        return {
          code: quotation.code,
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date
          // account_id: user_id
        };
      })
    );
    await QuotationModel.create(quotations);
    return quotations;
  };
};
