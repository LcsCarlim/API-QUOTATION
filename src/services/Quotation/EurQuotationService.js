const GetEURDataGateway = require('../../gateway/GetEURDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

module.exports = class EurQuotationService {
  constructor () {}

  async execute () {
    const response = await GetEURDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.slice(1).map(async (quotation) => {
        return {
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date,
          image: 'https://live.staticflickr.com/65535/52906488642_2485d59f42.jpg'
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'EUR',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://live.staticflickr.com/65535/52906488642_2485d59f42.jpg',
      history: quotations
    };
  };
};
