import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class EthQuotationService {
    constructor() {}
    async execute() {
        
        const response = await getCurrencyGateway();
        
        const json = await response.json();

            
        const ETH = {
            code: json.ETHBRL.code,
            bid: toBRL(json.ETHBRL.bid),
            create_date: json.ETHBRL.create_date
        };
        
        return {
            ETH

        };
    };
};