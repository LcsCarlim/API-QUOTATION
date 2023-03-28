const UserModel = require('../../database/model/UserModel');

module.exports = async (id) => {
  const userExists = await UserModel.findOne({ _id: id });

  if (!userExists) throw new Error('User not exists');

  const deleteUser = await UserModel.deleteOne({ _id: id });

  if (deleteUser) {
    return 'User deleted!';
  } else {
    throw new Error('Internal server error');
  }
};
