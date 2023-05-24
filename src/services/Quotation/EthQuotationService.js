const GetETHDataGateway = require('../../gateway/GetETHDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

module.exports = class EthQuotationService {
  constructor () {}
  async execute () {
    const response = await GetETHDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.slice(1).map(async (quotation) => {
        return {
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'ETH',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
      history: quotations
    };
  };
};
