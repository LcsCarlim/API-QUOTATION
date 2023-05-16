const DeleteUserService = require('../../services/User/DeleteUserService');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.user;
    const deleteUser = await DeleteUserService(id, role);

    return res.status(201).json({
      message: 'User deleted!',
      deleteUser
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
