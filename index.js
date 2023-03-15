const request = require("request")

const moedas = "USD-BRL,EUR-BRL,BTC-BRL"
const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Accept-Charset": "utf-8",
    }
}

const callback_todas_cotacoes = function(erro, res, body) {
    let json = JSON.parse(body)
    console.log(json);
}

const callback_dolar = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.USDBRL.bid
    data = json.USDBRL.create_date
    console.log(`DOLAR = R$${cotacao} DATA: ${data}`)
}

const callback_euro = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.EURBRL.bid
    data = json.EURBRL.create_date
    console.log(`EURO = R$${cotacao} DATA: ${data}`)
}

const callback_btc = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.BTCBRL.bid
    data = json.BTCBRL.create_date
    console.log(`BTC = R$${cotacao} DATA: ${data}`)
}
setInterval(() => {
request(options,callback_dolar)
request(options,callback_euro)
request(options,callback_btc)
console.log("*******************************************");
}, 5000)