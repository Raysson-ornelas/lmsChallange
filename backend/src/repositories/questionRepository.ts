import prisma from '../prismaClient';

export const QuestionRepository = {
  async getAll() {
    return prisma.question.findMany({ include: { options: true } });
  },
  async getById(id: string) {
    return prisma.question.findUnique({
      where: { id },
      include: { options: true },
    });
  },
};
