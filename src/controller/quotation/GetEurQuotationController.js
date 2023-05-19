const EurQuotationService = require('../../services/Quotation/EurQuotationService');

module.exports = async (req, res) => {
  const eurQuotationService = new EurQuotationService();
  const data = await eurQuotationService.execute();

  res.status(200).json(data);
};
