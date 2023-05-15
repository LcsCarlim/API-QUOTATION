const DogeQuotationService = require('../../services/Quotation/DogeQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const dogeQuotationService = new DogeQuotationService();
  const data = await dogeQuotationService.execute(id);

  res.status(200).json(data);
};
