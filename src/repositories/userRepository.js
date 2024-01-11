const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model('User', userSchema);

class UserRepository {
  async getAllUsers() {
    return await UserModel.find();
  }

  async getUserById(userId) {
    return await UserModel.findById(userId);
  }

  async createUser(user) {
    return await UserModel.create(user);
  }

  async updateUser(userId, updatedUserData) {
    return await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
  }

  async deleteUser(userId) {
    return await UserModel.findByIdAndDelete(userId);
  }
}

module.exports = UserRepository;