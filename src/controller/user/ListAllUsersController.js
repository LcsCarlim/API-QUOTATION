const ListUsersService = require('../../services/User/ListUsersService');

module.exports = async (req, res) => {
  try {
    const { role } = req.user;
    const users = await ListUsersService(role);
    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happened, try again',
      message: 'Users not found!'
    });
  }
};
