const updateUserService = require('../../services/User/UpdateUserService');
const PathUserValidator = require('../../validators/user/PathUserValidator');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { password } = req.body;
  try {
    const validator = await PathUserValidator;

    if (validator.error) throw validator.error;
    await updateUserService(id, password);

    return res.status(200).json({
      message: 'Password changed!'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
