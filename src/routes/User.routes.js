const { Router } = require('express');
const routes = Router();

const ListAllUsersController = require('../controller/user/ListAllUsersController');
const GetUserByIdController = require('../controller/user/GetUserByIdController');
const UserLoginController = require('../controller/user/UserLoginController');
const CreateUserController = require('../controller/user/CreateUserController');
const DeleteUserController = require('../controller/user/DeleteUserController');
const UserLogoutController = require('../controller/user/UserLogoutController');
const PathUserController = require('../controller/user/PathUserController');
const userAuth = require('../middlewares/CheckTokenMiddleware');
const userLogout = require('../middlewares/LogoutMiddleware');

routes.get('/list',
  userAuth,
  ListAllUsersController
);

routes.get('/find/:id',
  userAuth,
  GetUserByIdController
);

routes.post('/login',
  UserLoginController
);

routes.post('/logout',
  userLogout,
  UserLogoutController
);

routes.post('/register',
  CreateUserController
);

routes.delete('/delete/:id',
  userAuth,
  DeleteUserController
);

routes.patch('/patch',
  userAuth,
  PathUserController
);

module.exports = routes;
