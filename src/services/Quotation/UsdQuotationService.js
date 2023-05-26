const GetUSDDataGateway = require('../../gateway/GetUSDDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

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
          create_date: quotation.create_date
        };
      })
    );
    await QuotationModel.create(quotations);
    return {
      code: 'USD',
      name: 'Dólar-Americano',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663',
      description: 'O dólar é a moeda de reserva mais amplamente aceita e negociada globalmente, sendo a moeda oficial dos Estados Unidos. É usado como meio de troca em muitos países e é referência em transações internacionais, além de ser uma medida comum para avaliar o valor de outras moedas.',
      history: quotations
    };
  };
};
