const UserModel = require('../../database/model/UserModel');

module.exports = async (id, role) => {
  if (role !== 'Super') throw new Error('Without permission!');

  const deleteUser = await UserModel.deleteOne({ _id: id });
  if (!deleteUser) throw new Error('User not exists');
};
