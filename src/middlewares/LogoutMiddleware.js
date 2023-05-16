const { tokenIsInListing } = require('../middlewares/TokenListingMiddleware');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const result = tokenIsInListing(token);

  if (result) {
    return res.json(401).json({
      error: 'Invalid Token'
    });
  }
  next();
};
