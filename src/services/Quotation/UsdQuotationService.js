const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class UsdQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const USD = {
      code: json.USDBRL.code,
      bid: toBRL(json.USDBRL.bid),
      create_date: json.USDBRL.create_date
    };

    await QuotationModel.create(USD);

    return {
      USD

    };
  };
};
