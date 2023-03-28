const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class LtcQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const LTC = {
      code: json.LTCBRL.code,
      bid: toBRL(json.LTCBRL.bid),
      create_date: json.LTCBRL.create_date
    };

    await QuotationModel.create(LTC);

    return {
      LTC

    };
  };
};
