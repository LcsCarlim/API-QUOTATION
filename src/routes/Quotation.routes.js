const { Router } = require('express');
const routes = Router();

const checkToken = require('../middlewares/CheckTokenMiddleware');
const ListAllQuotationController = require('../controller/quotation/ListAllQuotationController');
const GetUsdQuotationController = require('../controller/quotation/GetQuotationUsdController');
const GetCadQuotationController = require('../controller/quotation/GetCadQuotationController');
const GetEurQuotationController = require('../controller/quotation/GetEurQuotationController');
const GetBtcQuotationController = require('../controller/quotation/GetBtcQuotationController');
const GetEthQuotationController = require('../controller/quotation/GetEthQuotationController');
const GetLtcQuotationController = require('../controller/quotation/GetLtcQuotationController');
const GetDogeQuotationController = require('../controller/quotation/GetDogeQuotationController');

routes.get('/list',
  checkToken,
  ListAllQuotationController
);

routes.get('/usd',
  checkToken,
  GetUsdQuotationController
);

routes.get('/cad',
  checkToken,
  GetCadQuotationController
);

routes.get('/eur',
  checkToken,
  GetEurQuotationController
);

routes.get('/btc',
  checkToken,
  GetBtcQuotationController
);

routes.get('/eth',
  checkToken,
  GetEthQuotationController
);

routes.get('/ltc',
  checkToken,
  GetLtcQuotationController
);

routes.get('/doge',
  checkToken,
  GetDogeQuotationController
);

module.exports = routes;
