const { Router } = require('express');
const routes = Router();

// const userAuth = require('../middlewares/CheckTokenMiddleware');
const ListAllQuotationController = require('../controller/quotation/ListAllQuotationController');
const GetUsdQuotationController = require('../controller/quotation/GetUsdQuotationController');
const GetCadQuotationController = require('../controller/quotation/GetCadQuotationController');
const GetEurQuotationController = require('../controller/quotation/GetEurQuotationController');
const GetBtcQuotationController = require('../controller/quotation/GetBtcQuotationController');
const GetEthQuotationController = require('../controller/quotation/GetEthQuotationController');
const GetLtcQuotationController = require('../controller/quotation/GetLtcQuotationController');
const GetDogeQuotationController = require('../controller/quotation/GetDogeQuotationController');
const CadImageController = require('../controller/quotation/CadImageController');
const EurImageController = require('../controller/quotation/EurImageController');

routes.get('/list',
  ListAllQuotationController
);

routes.get('/usd',
  GetUsdQuotationController
);

routes.get('/cad',
  GetCadQuotationController
);

routes.get('/eur',
  GetEurQuotationController
);

routes.get('/btc',
  GetBtcQuotationController
);

routes.get('/eth',
  GetEthQuotationController
);

routes.get('/ltc',
  GetLtcQuotationController
);

routes.get('/doge',
  GetDogeQuotationController
);

routes.get('/cadanaimg',
  CadImageController
);

routes.get('/euroimg',
  EurImageController
);

module.exports = routes;
