const GetBTCDataGateway = require('../../gateway/GetBTCDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
// const formatBRL = require('../../helpers/formatBRL');

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
          create_date: quotation.create_date
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'BTC',
      name: 'Bitcoin',
      bid: Number(json.at(0).bid),
      high: Number(json.at(0).high),
      low: Number(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://raw.githubusercontent.com/LcsCarlim/API-QUOTATION/main/public/Bitcoin.svg.webp',
      launch: '2009',
      description: 'O Bitcoin é a primeira criptomoeda descentralizada, baseada em tecnologia blockchain, que permite transações diretas entre pessoas, sem intermediários. É conhecido por sua oferta limitada e volatilidade de preços, sendo usado tanto como meio de pagamento quanto como um ativo de investimento.',
      history: quotations
    };
  };
};
