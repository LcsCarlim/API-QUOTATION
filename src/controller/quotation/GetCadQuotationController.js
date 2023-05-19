const CadQuotationService = require('../../services/Quotation/CadQuotationService');

module.exports = async (req, res) => {
  const cadQuotationService = new CadQuotationService();
  const data = await cadQuotationService.execute();

  res.status(200).json(data);
};
