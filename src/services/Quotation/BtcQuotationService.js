const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class BtcQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const BTC = {
      code: json.BTCBRL.code,
      bid: toBRL(json.BTCBRL.bid),
      create_date: json.BTCBRL.create_date
    };

    await QuotationModel.create(BTC);

    return {
      BTC

    };
  };
};
