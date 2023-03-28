const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class DogeQuotationService {
  constructor () {
  }

  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const DOGE = {
      code: json.DOGEBRL.code,
      bid: toBRL(json.DOGEBRL.bid),
      create_date: json.DOGEBRL.create_date
    };

    await QuotationModel.create(DOGE);

    return {
      DOGE

    };
  };
};
