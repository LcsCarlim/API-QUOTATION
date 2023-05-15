const CadQuotationService = require('../../services/Quotation/CadQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const cadQuotationService = new CadQuotationService();
  const data = await cadQuotationService.execute(id);

  res.status(200).json(data);
};
