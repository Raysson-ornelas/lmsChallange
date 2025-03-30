import { User } from '@prisma/client';
import { UserRepository } from '../repositories/userRepository';

export const UserService = {
  async createUser(username: string): Promise<User> {
    return UserRepository.create(username);
  },

  async getUserById(id: string): Promise<User | null> {
    return UserRepository.getById(id);
  },

  async getRanking() {
    return UserRepository.getRanking();
  },
};
