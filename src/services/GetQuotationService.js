import { getCurrencyGateway } from "../gateway/GetAPIDataGateway.js";
import { toBRL } from "../helpers/formatBRL.js";

export default class GetQuotationService {
    constructor() {}
    async execute() {
        const response = await getCurrencyGateway();
            
        const json = await response.json();

        const USD = {
            code: json.USDBRL.code,
            bid: toBRL(json.USDBRL.bid),
            create_date: json.USDBRL.create_date
        };
            
        const CAD = {
            code: json.CADBRL.code,
            bid: toBRL(json.CADBRL.bid),
            create_date: json.CADBRL.create_date
        };

        const EUR = {
            code: json.EURBRL.code,
            bid: toBRL(json.EURBRL.bid),
            create_date: json.EURBRL.create_date
        };

        const BTC = {
            code: json.BTCBRL.code,
            bid: toBRL(json.BTCBRL.bid),
            create_date: json.BTCBRL.create_date
        };

        const ETH = {
            code: json.ETHBRL.code,
            bid: toBRL(json.ETHBRL.bid),
            create_date: json.ETHBRL.create_date
        };

        const LTC = {
            code: json.LTCBRL.code,
            bid: toBRL(json.LTCBRL.bid),
            create_date: json.LTCBRL.create_date
        };

        const DOGE = {
            code: json.DOGEBRL.code,
            bid: toBRL(json.DOGEBRL.bid),
            create_date: json.DOGEBRL.create_date
        };
        
        return {
            USD, CAD, EUR, BTC, ETH, LTC, DOGE

        };
    };
};

