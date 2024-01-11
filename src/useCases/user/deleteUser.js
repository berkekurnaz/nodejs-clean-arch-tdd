class DeleteUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(userId) {
      try {
        // Kullanıcıyı sil
        await this.userRepository.deleteUser(userId);
  
        return { success: true, message: 'User deleted successfully' };
      } catch (error) {
        console.error('Error deleting user:', error);
        return { success: false, message: 'Error deleting user' };
      }
    }
  }
  
  module.exports = DeleteUser;  