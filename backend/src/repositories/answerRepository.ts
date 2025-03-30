import prisma from '../prismaClient';

export const AnswerRepository = {
  async create(data: {
    userId: string;
    questionId: string;
    selectedOptions: string[];
    score: number;
  }) {
    return prisma.answer.create({
      data: {
        userId: data.userId,
        questionId: data.questionId,
        selectedOptions: data.selectedOptions,
        score: data.score,
      },
    });
  },

  async getByUserId(userId: string) {
    return prisma.answer.findMany({
      where: { userId },
    });
  },
};
