const GetUSDDataGateway = require('../../gateway/GetUSDDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
// const formatBRL = require('../../helpers/formatBRL');

module.exports = class UsdQuotationService {
  constructor () {}
  async execute () {
    const response = await GetUSDDataGateway();

    const json = await response.json();

    const quotations = await Promise.all(
      json.slice(1).map(async (quotation) => {
        return {
          bid: toBRL(quotation.bid),
          high: toBRL(quotation.high),
          low: toBRL(quotation.low),
          pctChange: Number(quotation.pctChange),
          create_date: quotation.create_date,
          timestamp: new Date((Number(quotation.timestamp) * 1000))
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'USDT',
      name: 'Tether',
      bid: Number(json.at(0).bid),
      high: Number(json.at(0).high),
      low: Number(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/usdt.png',
      launch: '2014',
      description: 'USDT (Tether) é uma criptomoeda estável que tem seu valor atrelado ao dólar americano, proporcionando estabilidade às transações em criptomoedas. É amplamente utilizada como uma forma de manter o valor em criptomoedas sem se expor à volatilidade do mercado.',
      history: quotations
    };
  };
};
