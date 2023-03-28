const getCurrencyGateway = require('../../gateway/GetAPIDataGateway');
const toBRL = require('../../helpers/formatBRL');
const QuotationModel = require('../../database/model/QuotationModel');

module.exports = class EthQuotationService {
  constructor () {}
  async execute () {
    const response = await getCurrencyGateway();

    const json = await response.json();

    const ETH = {
      code: json.ETHBRL.code,
      bid: toBRL(json.ETHBRL.bid),
      create_date: json.ETHBRL.create_date
    };

    await QuotationModel.create(ETH);

    return {
      ETH

    };
  };
};
