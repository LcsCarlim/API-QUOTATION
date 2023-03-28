const { Router } = require('express');

const UserController = require('../controller/UserController');

const routes = Router();

routes.get('/users', UserController.list);

routes.get('/users/:id', UserController.getById);

routes.post('/auth/register', UserController.createUserAuth);

routes.post('/logout', UserController.logout);

routes.post('/user', UserController.createUser);

routes.delete('/users/:id', UserController.deleteUser);

routes.patch('/users/:id', UserController.updateUser);

module.exports = { routes };
