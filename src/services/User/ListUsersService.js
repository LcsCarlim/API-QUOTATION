const UserModel = require('../../database/model/UserModel');

module.exports = async role => {
  if (role !== 'Super') throw new Error('Without permission!');
  const users = await UserModel.find();

  return users;
};
