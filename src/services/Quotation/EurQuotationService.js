const GetEURDataGateway = require('../../gateway/GetEURDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class EurQuotationService {
  constructor () {}
  async execute () {
    const response = await GetEURDataGateway();

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
