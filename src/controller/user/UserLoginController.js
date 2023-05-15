const CreateUserAuthService = require('../../services/User/CreateUserAuthService');
const UserLoginValidator = require('../../validators/user/UserLoginValidator');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validator = await UserLoginValidator(req.body);
    if (validator.error) throw validator.error;

    const token = await CreateUserAuthService(email, password);

    res.status(200).json({
      message: 'Login successful!',
      token
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: 'Authenticate failed!',
      message: error.message
    });
  }
};
