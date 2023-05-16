const UserModel = require('../../database/model/UserModel');

module.exports = async ({ name, email, password, role }) => {
  const userExists = await UserModel.findOne({
    email
  });
  if (userExists) throw new Error('Email already exists!');

  const user = await UserModel.create({
    name,
    email,
    password,
    role
  });

  return user;
};
