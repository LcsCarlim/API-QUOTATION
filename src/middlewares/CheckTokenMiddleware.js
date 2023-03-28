const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Access denied!' });
  }

  try {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const decoded = jwt.verify(token, secret);

    console.log('decoded', decoded);

    const { id } = decoded;

    req.user = { id };
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Invalid token!' });
  }
};
