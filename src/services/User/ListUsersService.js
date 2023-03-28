const UserModel = require('../../database/model/UserModel');

module.exports = async () => {
  const users = await UserModel.find();

  return users;
};
