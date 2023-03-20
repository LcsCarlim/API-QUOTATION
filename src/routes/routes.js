import { Router } from "express";

import { QuotationController } from "../controller/QuotationController.js";

const quotationController = new QuotationController()

const quotationRoutes = Router();

quotationRoutes.get('/', quotationController.quotation);

quotationRoutes.get('/usd', quotationController.quotationUSD);

quotationRoutes.get('/eur', quotationController.quotationEUR);

quotationRoutes.get('/btc', quotationController.quotationBTC);

export { quotationRoutes };