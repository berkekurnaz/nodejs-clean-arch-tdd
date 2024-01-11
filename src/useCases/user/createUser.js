const UserRepository = require('../../repositories/userRepository');
const User = require('../../entities/user');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(name, email) {
    const newUser = new User(undefined, name, email);
    return this.userRepository.createUser(newUser);
  }
}

module.exports = CreateUser;