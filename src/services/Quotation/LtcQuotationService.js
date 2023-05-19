const getCurrencyGateway = require('../../gateway/GetLTCDataGateway');
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
      high: toBRL(json.LTCBRL.high),
      low: toBRL(json.LTCBRL.low),
      pctChange: Number(json.LTCBRL.pctChange),
      create_date: json.LTCBRL.create_date
      // account_id: user_id
    };

    await QuotationModel.create(LTC);

    return {
      LTC

    };
  };
};
