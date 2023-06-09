const GetDogeDataGateway = require('../../gateway/GetDOGEDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
// const formatBRL = require('../../helpers/formatBRL');

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
          timestamp: new Date((Number(quotation.timestamp) * 1000))
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'DOGE',
      name: 'Dogecoin',
      bid: Number(json.at(0).bid),
      high: Number(json.at(0).high),
      low: Number(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/Dogecoin_Logo.png',
      launch: '2013',
      description: 'O Dogecoin é uma criptomoeda baseada em um meme de cachorro. Foi criado como uma brincadeira, mas ganhou popularidade. É usado principalmente para gorjetas online e doações, com transações rápidas e baixas taxas.',
      history: quotations
    };
  };
};
