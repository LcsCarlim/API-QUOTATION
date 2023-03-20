import { getCurrencyGateway } from '../gateway/GetAPIDataGateway.js'
import { toBRL } from '../helpers/formatBRL.js'

export default class BtcQuotationService {
    constructor() {}
    async execute() {
        
        const response = await getCurrencyGateway();
            
        const json = await response.json();

        const BTC = {
            code: json.BTCBRL.code,
            bid: toBRL(json.BTCBRL.bid),
            create_date: json.BTCBRL.create_date,
        };
            
        return {
            BTC

        };
    };
};

