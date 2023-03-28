const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class EurQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const EUR = {
      code: json.EURBRL.code,
      bid: toBRL(json.EURBRL.bid),
      create_date: json.EURBRL.create_date
    };

    await QuotationModel.create(EUR);

    return { EUR };
  };
};
