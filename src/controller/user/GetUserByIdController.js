const GetUserByIdService = require('../../services/User/GetUserByIdService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  try {
    const user = await GetUserByIdService(id, role);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
