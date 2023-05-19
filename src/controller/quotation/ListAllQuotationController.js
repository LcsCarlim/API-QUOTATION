const GetQuotationService = require('../../services/Quotation/GetQuotationService');

module.exports = async (req, res) => {
  try {
    const getQuotationService = new GetQuotationService();
    const data = await getQuotationService.execute();

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
