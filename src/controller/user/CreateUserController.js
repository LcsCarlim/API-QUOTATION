const CreateUsersService = require('../../services/User/CreateUsersService');
const CreateUserValidator = require('../../validators/user/CreateUserValidator');

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const validator = await CreateUserValidator(req.body);
    if (validator.error) throw validator.error;

    const users = await CreateUsersService(name, email, password);

    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({
      error: 'Registration failed',
      message: error.message
    });
  }
};
