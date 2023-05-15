const LtcQuotationService = require('../../services/Quotation/LtcQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const ltcQuotationService = new LtcQuotationService();
  const data = await ltcQuotationService.execute(id);

  res.status(200).json(data);
};
