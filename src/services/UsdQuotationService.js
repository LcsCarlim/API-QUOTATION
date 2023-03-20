import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class UsdQuotationService {
    constructor() {}
    async execute() {
        const response = await getCurrencyGateway();
            
        const json = await response.json();

        const USD = {
            code: json.USDBRL.code,
            bid: toBRL(json.USDBRL.bid),
            create_date: json.USDBRL.create_date
        };
        
        return {
            USD

        };
    };
};

