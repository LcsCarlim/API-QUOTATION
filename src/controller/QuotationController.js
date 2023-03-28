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
    const getQuotationService = new GetQuotationService();
    const data = await getQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationUSD (req, res) {
    const usdQuotationService = new UsdQuotationService();
    const data = await usdQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationCAD (req, res) {
    const cadQuotationService = new CadQuotationService();
    try {
      const data = await cadQuotationService.execute();

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({
        Error: true,
        message: error.message
      });
    }
  },

  async quotationEUR (req, res) {
    const eurQuotationService = new EurQuotationService();
    const data = await eurQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationBTC (req, res) {
    const btcQuotationService = new BtcQuotationService();
    const data = await btcQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationETH (req, res) {
    const ethQuotationService = new EthQuotationService();
    const data = await ethQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationLTC (req, res) {
    const ltcQuotationService = new LtcQuotationService();
    const data = await ltcQuotationService.execute();

    res.status(200).json(data);
  },

  async quotationDOGE (req, res) {
    const dogeQuotationService = new DogeQuotationService();
    const data = await dogeQuotationService.execute();

    res.status(200).json(data);
  }
};
