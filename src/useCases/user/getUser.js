class GetUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(userId) {
      try {
        if (userId) {
          const user = await this.userRepository.getUserById(userId);
  
          if (!user) {
            return { success: false, message: 'User not found' };
          }
  
          return { success: true, user };
        } else {
          const users = await this.userRepository.getAllUsers();
          return { success: true, users };
        }
      } catch (error) {
        console.error('Error getting user(s):', error);
        return { success: false, message: 'Error getting user(s)' };
      }
    }
  }
  
  module.exports = GetUser;  