const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class CadQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const CAD = {
      code: json.CADBRL.code,
      bid: toBRL(json.CADBRL.bid),
      create_date: json.CADBRL.create_date
    };

    await QuotationModel.create(CAD);

    return { CAD };
  };
};
