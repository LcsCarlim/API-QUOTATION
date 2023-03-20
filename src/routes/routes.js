import { Router } from "express";

import { QuotationController } from "../controller/QuotationController.js";

const quotationController = new QuotationController()

const quotationRoutes = Router();

quotationRoutes.get('/', quotationController.quotation);

quotationRoutes.get('/usd', quotationController.quotationUSD);

quotationRoutes.get('/cad', quotationController.quotationCAD);

quotationRoutes.get('/eur', quotationController.quotationEUR);

quotationRoutes.get('/btc', quotationController.quotationBTC);

quotationRoutes.get('/eth', quotationController.quotationETH);

quotationRoutes.get('/ltc', quotationController.quotationLTC);

quotationRoutes.get('/doge', quotationController.quotationDOGE);

export { quotationRoutes };