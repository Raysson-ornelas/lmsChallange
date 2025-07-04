import prisma from '../prismaClient';

export const UserRepository = {
  async create(username: string) {
    return prisma.user.create({
      data: { username },
    });
  },

  async getById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  async updateScore(userId: string, score: number) {
    return await prisma.user.update({
      where: { id: userId },
      data: { score },
    });
  },

  async getRanking() {
    return await prisma.user.findMany({
      orderBy: [{ score: 'desc' }, { createdAt: 'asc' }],
      select: { id: true, createdAt: true, username: true, score: true },
    });
  },

  async getByName(username: string) {
    return await prisma.user.findUnique({ where: { username } });
  },
};
