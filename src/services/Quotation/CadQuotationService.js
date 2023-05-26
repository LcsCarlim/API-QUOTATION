const GetCADDataGateway = require('../../gateway/GetCADDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');
const formatBRL = require('../../helpers/formatBRL');

module.exports = class CadQuotationService {
  constructor () {
  }

  async execute () {
    const response = await GetCADDataGateway();

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
      code: 'CAD',
      name: 'Dólar-Canadense',
      bid: formatBRL(json.at(0).bid),
      high: formatBRL(json.at(0).high),
      low: formatBRL(json.at(0).low),
      pctChange: Number(json.at(0).pctChange),
      image: 'https://thumbs2.imgbox.com/b1/e1/9xMx9wP5_t.png',
      description: 'O dólar canadense é a moeda oficial do Canadá, amplamente aceita no país e em algumas regiões dos Estados Unidos. Sua taxa de câmbio varia de acordo com fatores econômicos e é negociada globalmente.',
      history: quotations
    };
  };
};
