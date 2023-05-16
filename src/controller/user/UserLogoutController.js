const { tokenIsInListing, addTokenToListing } = require('../../middlewares/TokenListingMiddleware');

module.exports = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  if (tokenIsInListing(token)) {
    return res.status(400).json({
      error: 'Token already invalidated!'
    });
  }

  addTokenToListing(token);

  return res.status(200).json({
    message: 'Logout successful!'
  });
};
