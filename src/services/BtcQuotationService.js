import fetch from 'node-fetch';

const moedas = "USD-BRL,EUR-BRL,BTC-BRL";

export const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    
};

export default class BtcQuotationService {
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

            const BTC = {
                code: json.BTCBRL.code,
                bid: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(json.BTCBRL.bid),
                create_date: json.BTCBRL.create_date,
            };
            
            return {
                BTC

        };
    };
};

