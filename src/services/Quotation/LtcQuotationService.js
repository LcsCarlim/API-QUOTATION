const GetLTCDataGateway = require('../../gateway/GetLTCDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
// const formatBRL = require('../../helpers/formatBRL');

module.exports = class LtcQuotationService {
  constructor () {}
  async execute () {
    const response = await GetLTCDataGateway();

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
      code: 'LTC',
      name: 'Litecoin',
      bid: Number(json.at(0).bid),
      high: Number(json.at(0).high),
      low: Number(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/litecoin.png',
      launch: '2011',
      description: 'O Litecoin é uma criptomoeda descentralizada baseada na tecnologia blockchain, que foi criada como uma alternativa ao Bitcoin. É conhecido por transações rápidas e baixas taxas, além de ter um suprimento máximo maior do que o Bitcoin.',
      history: quotations
    };
  };
};
