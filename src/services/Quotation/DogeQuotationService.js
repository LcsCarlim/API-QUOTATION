const getCurrencyGateway = require('../../gateway/GetDOGEDataGateway');
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
      high: toBRL(json.DOGEBRL.high),
      low: toBRL(json.DOGEBRL.low),
      pctChange: Number(json.DOGEBRL.pctChange),
      create_date: json.DOGEBRL.create_date
      // account_id: user_id
    };

    await QuotationModel.create(DOGE);

    return {
      DOGE

    };
  };
};
