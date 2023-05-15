const EthQuotationService = require('../../services/Quotation/EthQuotationService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const ethQuotationService = new EthQuotationService();
  const data = await ethQuotationService.execute(id);

  res.status(200).json(data);
};
