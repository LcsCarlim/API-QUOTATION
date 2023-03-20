import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class LtcQuotationService {
    constructor() {}
    async execute() {
        
        const response = await getCurrencyGateway();
        
        const json = await response.json();

            
        const LTC = {
            code: json.LTCBRL.code,
            bid: toBRL(json.LTCBRL.bid),
            create_date: json.LTCBRL.create_date
        };
        
        return {
            LTC

        };
    };
};