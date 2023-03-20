import BtcQuotationService from '../services/BtcQuotationService.js';
import CadQuotationService from '../services/CadQuotationService.js';
import DogeQuotationService from '../services/DogeQuotationService.js';
import EthQuotationService from '../services/EthQuotationService.js';
import EurQuotationService from '../services/EurQuotationService.js';
import GetQuotationService from '../services/GetQuotationService.js';
import LtcQuotationService from '../services/LtcQuotationService.js';
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
    
    async quotationCAD(req, res) {
        const cadQuotationService = new CadQuotationService();
        const data = await cadQuotationService.execute();
    
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

    async quotationETH(req, res) {
        const ethQuotationService = new EthQuotationService();
        const data = await ethQuotationService.execute();

        res.json(data)
    };

    async quotationLTC(req, res) {
        const ltcQuotationService = new LtcQuotationService();
        const data = await ltcQuotationService.execute();

        res.json(data);
    };

    async quotationDOGE(req, res) {
        const dogeQuotationService = new DogeQuotationService();
        const data = await dogeQuotationService.execute();

        res.json(data)
    }
};