const EthQuotationService = require('../../services/Quotation/EthQuotationService');

module.exports = async (req, res) => {
  const ethQuotationService = new EthQuotationService();
  const data = await ethQuotationService.execute();

  res.status(200).json(data);
};
