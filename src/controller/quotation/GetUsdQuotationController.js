const UsdQuotationService = require('../../services/Quotation/UsdQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const usdQuotationService = new UsdQuotationService();
  const data = await usdQuotationService.execute(id);

  res.status(200).json(data);
};
