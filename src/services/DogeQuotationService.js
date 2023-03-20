import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class DogeQuotationService {
    constructor() {}
    async execute() {
        
        const response = await getCurrencyGateway();
        
        const json = await response.json();

            
        const DOGE = {
            code: json.DOGEBRL.code,
            bid: toBRL(json.DOGEBRL.bid),
            create_date: json.DOGEBRL.create_date
        };
        
        return {
            DOGE

        };
    };
};