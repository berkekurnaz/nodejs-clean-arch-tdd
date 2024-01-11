class UpdateUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(userId, updatedUserData) {
      try {
        const existingUser = await this.userRepository.getUserById(userId);
  
        if (!existingUser) {
          return { success: false, message: 'User not found' };
        }
  
        await this.userRepository.updateUser(userId, updatedUserData);
  
        const updatedUser = { ...existingUser._doc, ...updatedUserData };
  
        return { success: true, updatedUser, message: 'User updated successfully' };
      } catch (error) {
        console.error('Error updating user:', error);
        return { success: false, message: 'Error updating user' };
      }
    }
  }
  
  module.exports = UpdateUser;  