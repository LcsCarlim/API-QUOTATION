const EurQuotationService = require('../../services/Quotation/EurQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const eurQuotationService = new EurQuotationService();
  const data = await eurQuotationService.execute(id);

  res.status(200).json(data);
};
