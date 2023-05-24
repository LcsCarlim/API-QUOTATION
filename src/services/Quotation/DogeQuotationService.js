const GetDogeDataGateway = require('../../gateway/GetDOGEDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

module.exports = class DogeQuotationService {
  constructor () {
  }

  async execute () {
    const response = await GetDogeDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.slice(1).map(async (quotation) => {
        return {
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date,
          image: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256'
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'DOGE',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256',
      history: quotations
    };
  };
};
