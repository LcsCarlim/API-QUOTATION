const { Router } = require('express');
const routes = Router();

const quotationController = require('../controller/QuotationController');
const checkToken = require('../middlewares/CheckTokenMiddleware');

routes.get('/list',
  checkToken,
  quotationController.quotation
);

routes.get('/usd',
  checkToken,
  quotationController.quotationUSD
);

routes.get('/cad',
  checkToken,
  quotationController.quotationCAD
);

routes.get('/eur',
  checkToken,
  quotationController.quotationEUR
);

routes.get('/btc',
  checkToken,
  quotationController.quotationBTC
);

routes.get('/eth',
  checkToken,
  quotationController.quotationETH
);

routes.get('/ltc',
  checkToken,
  quotationController.quotationLTC
);

routes.get('/doge',
  checkToken,
  quotationController.quotationDOGE
);

module.exports = routes;
