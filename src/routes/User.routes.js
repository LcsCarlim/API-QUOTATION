const { Router } = require('express');
const routes = Router();

const ListAllUsersController = require('../controller/user/ListAllUsersController');
const GetUserByIdController = require('../controller/user/GetUserByIdController');
const UserLoginController = require('../controller/user/UserLoginController');
const CreateUserController = require('../controller/user/CreateUserController');
const DeleteUserController = require('../controller/user/DeleteUserController');
const UserLogoutController = require('../controller/user/UserLogoutController');
const PathUserController = require('../controller/user/PathUserController');

routes.get('/list',
  ListAllUsersController
);

routes.get('/find/:id',
  GetUserByIdController
);

routes.post('/login',
  UserLoginController
);

routes.post('/logout',
  UserLogoutController
);

routes.post('/register',
  CreateUserController
);

routes.delete('/delete/:id',
  DeleteUserController
);

routes.patch('/patch/:id',
  PathUserController
);

module.exports = routes;
