const UsdQuotationService = require('../../services/Quotation/UsdQuotationService');

module.exports = async (req, res) => {
  const usdQuotationService = new UsdQuotationService();
  const data = await usdQuotationService.execute();

  res.status(200).json(data);
};
