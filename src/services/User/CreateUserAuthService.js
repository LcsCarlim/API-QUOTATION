const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../../database/model/UserModel');

module.exports = async ({ email, password }) => {
  const user = await UserModel.findOne({
    email
  }).select('+password');
  if (!user) throw new Error("Email doesn't exists!");

  const auth = await compare(password, user.password);

  if (!auth) throw new Error('Senha inválida');

  const secret = process.env.ACCESS_TOKEN_SECRET;

  const token = jwt.sign({
    id: user._id,
    role: user.role
  },
  secret
  );

  return token;
};
