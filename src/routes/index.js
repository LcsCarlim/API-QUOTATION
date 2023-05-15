const { Router } = require('express');
const routes = Router();

const usersRoutes = require('../routes/User.routes');
const quotationRoutes = require('../routes/Quotation.routes');

routes.use('/users',
  usersRoutes
);

routes.use('/quotations',
  quotationRoutes
);

module.exports = routes;
