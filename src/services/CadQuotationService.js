import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class CadQuotationService {
    constructor() {}
    async execute() {
        
        const response = await getCurrencyGateway();
        
        const json = await response.json();

            
        const CAD = {
            code: json.CADBRL.code,
            bid: toBRL(json.CADBRL.bid),
            create_date: json.CADBRL.create_date
        };
        
        return {
            CAD

        };
    };
};