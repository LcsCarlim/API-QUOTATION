const jwt = require('jsonwebtoken');
const { tokenIsInListing } = require('./TokenListingMiddleware');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      msg: 'Access denied!'
    });
  }

  const listed = tokenIsInListing(token);

  try {
    if (listed) throw new Error('Invalid token!');
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const decoded = jwt.verify(token, secret);

    const { id, role } = decoded;

    req.user = { id, role };
    next();
  } catch (error) {
    res.status(400).json({
      error: 'Invalid token!',
      message: error.message
    });
  }
};
