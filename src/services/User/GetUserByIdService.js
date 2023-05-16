const UserModel = require('../../database/model/UserModel');

module.exports = async (id, role) => {
  if (role !== 'Super') throw new Error('Without permission!');
  const user = await UserModel.findOne({ _id: id });
  if (!user) throw new Error('User not found');
  return user;
};
