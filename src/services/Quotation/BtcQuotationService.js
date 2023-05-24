const GetBTCDataGateway = require('../../gateway/GetBTCDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

module.exports = class BtcQuotationService {
  constructor () {}

  async execute () {
    const response = await GetBTCDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.slice(1).map(async (quotation) => {
        return {
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date,
          image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'BTC',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
      history: quotations
    };
  };
};
