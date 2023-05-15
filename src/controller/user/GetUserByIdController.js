const GetUserByIdService = require('../../services/User/GetUserByIdService');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await GetUserByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
