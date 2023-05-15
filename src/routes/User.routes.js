const { Router } = require('express');
const routes = Router();

const UserController = require('../controller/UserController');

routes.get('/list',
  UserController.list
);

routes.get('/find/:id',
  UserController.getById
);

routes.post('/login',
  UserController.createUserAuth
);

routes.post('/logout',
  UserController.logout
);

routes.post('/register',
  UserController.createUser
);

routes.delete('/delete/:id',
  UserController.deleteUser
);

routes.patch('/patch/:id',
  UserController.updateUser
);

module.exports = routes;
