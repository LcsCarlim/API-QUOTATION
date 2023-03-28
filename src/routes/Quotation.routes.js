const { Router } = require('express');

const quotationController = require('../controller/QuotationController');

const checkToken = require('../middlewares/CheckTokenMiddleware');

const LogoutMiddleware = require('../middlewares/LogoutMiddleware');

const quotationRoutes = Router();

quotationRoutes.get('/', checkToken, LogoutMiddleware, quotationController.quotation);

quotationRoutes.get('/usd', checkToken, quotationController.quotationUSD);

quotationRoutes.get('/cad', checkToken, quotationController.quotationCAD);

quotationRoutes.get('/eur', checkToken, quotationController.quotationEUR);

quotationRoutes.get('/btc', checkToken, quotationController.quotationBTC);

quotationRoutes.get('/eth', checkToken, quotationController.quotationETH);

quotationRoutes.get('/ltc', checkToken, quotationController.quotationLTC);

quotationRoutes.get('/doge', checkToken, quotationController.quotationDOGE);

module.exports = { quotationRoutes };
