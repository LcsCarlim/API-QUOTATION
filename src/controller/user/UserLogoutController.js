const { addTokenToBlackList, tokenIsInBlackList } = require('../../services/User/BlackListService');

module.exports = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  if (tokenIsInBlackList(token)) {
    return res.status(400).json({ error: 'Token already invalidated' });
  }
  addTokenToBlackList(token);

  return res.status(200).json({ message: 'Logout successful' });
};
