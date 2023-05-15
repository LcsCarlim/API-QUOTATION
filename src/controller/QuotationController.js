const BtcQuotationService = require('../services/Quotation/BtcQuotationService');
const CadQuotationService = require('../services/Quotation/CadQuotationService');
const DogeQuotationService = require('../services/Quotation/DogeQuotationService');
const EthQuotationService = require('../services/Quotation/EthQuotationService');
const EurQuotationService = require('../services/Quotation/EurQuotationService');
const GetQuotationService = require('../services/Quotation/GetQuotationService');
const LtcQuotationService = require('../services/Quotation/LtcQuotationService');
const UsdQuotationService = require('../services/Quotation/UsdQuotationService');

module.exports = {
  async quotation (req, res) {
    try {
      const { id } = req.user;
      const getQuotationService = new GetQuotationService();
      const data = await getQuotationService.execute(id);

      res.status(200).json(data);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  async quotationUSD (req, res) {
    const { id } = req.user;
    const usdQuotationService = new UsdQuotationService();
    const data = await usdQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationCAD (req, res) {
    const { id } = req.user;
    const cadQuotationService = new CadQuotationService();
    const data = await cadQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationEUR (req, res) {
    const { id } = req.user;
    const eurQuotationService = new EurQuotationService();
    const data = await eurQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationBTC (req, res) {
    const { id } = req.user;
    const btcQuotationService = new BtcQuotationService();
    const data = await btcQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationETH (req, res) {
    const { id } = req.user;
    const ethQuotationService = new EthQuotationService();
    const data = await ethQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationLTC (req, res) {
    const { id } = req.user;
    const ltcQuotationService = new LtcQuotationService();
    const data = await ltcQuotationService.execute(id);

    res.status(200).json(data);
  },

  async quotationDOGE (req, res) {
    const { id } = req.user;
    const dogeQuotationService = new DogeQuotationService();
    const data = await dogeQuotationService.execute(id);

    res.status(200).json(data);
  }
};
