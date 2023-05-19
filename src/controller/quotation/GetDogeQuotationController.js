const DogeQuotationService = require('../../services/Quotation/DogeQuotationService');

module.exports = async (req, res) => {
  const dogeQuotationService = new DogeQuotationService();
  const data = await dogeQuotationService.execute();

  res.status(200).json(data);
};
