const DeleteUserService = require('../../services/User/DeleteUserService');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await DeleteUserService(id);

    res.status(201).json({ message: 'User deleted!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
