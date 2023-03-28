const Joi = require('joi');

const { addTokenToBlackList, tokenIsInBlackList } = require('../services/User/BlackListService');
const getUserByIdService = require('../services/User/GetUserByIdService');
const listUsersService = require('../services/User/ListUsersService');
const createUsersService = require('../services/User/CreateUsersService');
const createUserAuthService = require('../services/User/CreateUserAuthService');
const deleteUserService = require('../services/User/DeleteUserService');
const updateUserService = require('../services/User/UpdateUserService');

module.exports = {
  async list (req, res) {
    try {
      const users = await listUsersService();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({
        error: 'Something wrong happened, try again',
        message: 'Users not found!'
      });
    }
  },

  async getById (req, res) {
    const { id } = req.params;
    try {
      const user = await getUserByIdService(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async createUser (req, res) {
    const { name, email, password } = req.body;

    const schema = Joi.object({
      name: Joi.string()
        .required(),
      email: Joi.string()
        .email(),
      password: Joi.string()
        .required()
        .min(8)

    });

    try {
      await schema.validateAsync({ name, email, password });

      const users = await createUsersService(name, email, password);

      return res.status(201).json(users);
    } catch (error) {
      return res.status(500).json({
        error: 'Registration failed',
        message: error.message
      });
    }
  },

  async deleteUser (req, res) {
    const { id } = req.params;

    try {
      await deleteUserService(id);

      res.status(201).json({ message: 'User deleted!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateUser (req, res) {
    const { id } = req.params;

    const { password } = req.body;

    const schema = Joi.object({
      password: Joi.string()
        .required()
        .min(8)
    });

    try {
      await schema.validateAsync({ password });

      await updateUserService(id, password);

      return res.status(200).json({
        message: 'Password changed!'
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async createUserAuth (req, res) {
    const { email, password } = req.body;

    const schema = Joi.object({
      email: Joi.string()
        .email(),
      password: Joi.string()
        .required()
        .min(8)
    });
    try {
      await schema.validateAsync({ email, password });

      const token = await createUserAuthService(email, password);

      res.status(200).json({ msg: 'Authentication successful', token });
    } catch (error) {
      console.log(error);

      res.status(500).json({ msg: error });
    }
  },
  async logout (req, res) {
    const token = req.headers.authorization.split(' ')[1];
    if (tokenIsInBlackList(token)) {
      return res.status(400).json({ error: 'Token already invalidated' });
    }
    addTokenToBlackList(token);

    return res.status(200).json({ message: 'Logout successful' });
  }
};
