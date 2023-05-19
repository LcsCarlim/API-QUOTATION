const getCurrencyGateway = require('../../gateway/GetCADDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class CadQuotationService {
  constructor () {
  }

  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const CAD = {
      code: json.CADBRL.code,
      bid: toBRL(json.CADBRL.bid),
      high: toBRL(json.CADBRL.high),
      low: toBRL(json.CADBRL.low),
      pctChange: Number(json.CADBRL.pctChange),
      create_date: json.CADBRL.create_date
      // account_id: user_id
    };

    await QuotationModel.create(CAD);

    return {
      CAD
    };
  };
};
