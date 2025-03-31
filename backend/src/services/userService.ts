import { User } from '@prisma/client';
import { UserRepository } from '../repositories/userRepository';

export const UserService = {
  async createUser(username: string): Promise<User> {
    return UserRepository.create(username);
  },

  async getUserById(id: string): Promise<User | null> {
    return UserRepository.getById(id);
  },

  async getRanking(): Promise<User[] | null> {
    return UserRepository.getRanking();
  },
  async updateScore(userId: string, score: number): Promise<User> {
    return UserRepository.updateScore(userId, score);
  },

  async getUserByUsername(username: string): Promise<User | null> {
    return UserRepository.getByName(username);
  },
};
