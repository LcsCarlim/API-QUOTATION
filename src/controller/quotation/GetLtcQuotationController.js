const LtcQuotationService = require('../../services/Quotation/LtcQuotationService');

module.exports = async (req, res) => {
  const ltcQuotationService = new LtcQuotationService();
  const data = await ltcQuotationService.execute();

  res.status(200).json(data);
};
