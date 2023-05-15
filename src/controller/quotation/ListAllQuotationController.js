const GetQuotationService = require('../../services/Quotation/GetQuotationService');

module.exports = async (req, res) => {
  try {
    const { id } = req.user;
    const getQuotationService = new GetQuotationService();
    const data = await getQuotationService.execute(id);

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
