const BtcQuotationService = require('../../services/Quotation/BtcQuotationService');

module.exports = async (req, res) => {
  const btcQuotationService = new BtcQuotationService();
  const data = await btcQuotationService.execute();

  res.status(200).json(data);
};
