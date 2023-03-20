import BtcQuotationService from '../services/BtcQuotationService.js';
import EurQuotationService from '../services/EurQuotationService.js';
import GetQuotationService from '../services/GetQuotationService.js';
import UsdQuotationService from '../services/UsdQuotationService.js';


export class QuotationController { 
    constructor() {}

    async quotation(req, res) {
        const getQuotationService = new GetQuotationService();
        const data = await getQuotationService.execute();

        res.json(data);
    };
   
    async quotationUSD(req, res) {
        const usdQuotationService = new UsdQuotationService();
        const data = await usdQuotationService.execute();

        res.json(data);
    };

    async quotationEUR(req, res) {
        const eurQuotationService = new EurQuotationService();
        const data = await eurQuotationService.execute();

        res.json(data)
    };

    async quotationBTC(req, res) {
        const btcQuotationService = new BtcQuotationService();
        const data = await btcQuotationService.execute();

        res.json(data);
    };
};