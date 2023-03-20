import fetch from 'node-fetch';

const moedas = "USD-BRL,EUR-BRL,BTC-BRL";

export const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    
};

export default class GetQuotationService {
    constructor() {}
    async execute() {
        const data = fetch(`https://economia.awesomeapi.com.br/last/${moedas}`, { 
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Accept-Charset": "utf-8",
            }
        });
            // if (erro) throw new Error("Error")

            const response = await data;
            
            const json = await response.json();

            
            const USD = {
                code: json.USDBRL.code,
                bid: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(json.USDBRL.bid),
                create_date: json.USDBRL.create_date
            };
            
            const EUR = {
                code: json.EURBRL.code,
                bid: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(json.EURBRL.bid),
                create_date: json.EURBRL.create_date
            };

            const BTC = {
                code: json.BTCBRL.code,
                bid: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(json.BTCBRL.bid),
                create_date: json.BTCBRL.create_date
            };
        
        return {
            USD, EUR, BTC

        };
    };
};

