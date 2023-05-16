const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const ListAllQuotationController = require('../controller/quotation/ListAllQuotationController');
const GetUsdQuotationController = require('../controller/quotation/GetQuotationUsdController');
const GetCadQuotationController = require('../controller/quotation/GetCadQuotationController');
const GetEurQuotationController = require('../controller/quotation/GetEurQuotationController');
const GetBtcQuotationController = require('../controller/quotation/GetBtcQuotationController');
const GetEthQuotationController = require('../controller/quotation/GetEthQuotationController');
const GetLtcQuotationController = require('../controller/quotation/GetLtcQuotationController');
const GetDogeQuotationController = require('../controller/quotation/GetDogeQuotationController');

routes.get('/list',
  userAuth,
  ListAllQuotationController
);

routes.get('/usd',
  userAuth,
  GetUsdQuotationController
);

routes.get('/cad',
  userAuth,
  GetCadQuotationController
);

routes.get('/eur',
  userAuth,
  GetEurQuotationController
);

routes.get('/btc',
  userAuth,
  GetBtcQuotationController
);

routes.get('/eth',
  userAuth,
  GetEthQuotationController
);

routes.get('/ltc',
  userAuth,
  GetLtcQuotationController
);

routes.get('/doge',
  userAuth,
  GetDogeQuotationController
);

module.exports = routes;
