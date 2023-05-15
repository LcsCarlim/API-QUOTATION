const BtcQuotationService = require('../../services/Quotation/BtcQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const btcQuotationService = new BtcQuotationService();
  const data = await btcQuotationService.execute(id);

  res.status(200).json(data);
};
