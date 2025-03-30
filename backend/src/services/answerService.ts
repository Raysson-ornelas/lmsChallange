import { Answer } from '@prisma/client';
import { QuestionRepository } from '../repositories/questionRepository';
import { AnswerRepository } from '../repositories/answerRepository';

export const AnswerService = {
  async calculateScore(questionId: string, selectedOptions: string[]): Promise<number> {
    const question = await QuestionRepository.getById(questionId);
    if (!question) throw new Error('Pergunta não encontrada.');

    const correctOptions = question.options.filter((opt) => opt.isCorrect).map((opt) => opt.id);
    const totalCorrect = correctOptions.length;
    const selectedCorrect = selectedOptions.filter((opt) => correctOptions.includes(opt)).length;
    const selectedWrong = selectedOptions.filter((opt) => !correctOptions.includes(opt)).length;

    if (selectedWrong > 0) return 0;
    if (selectedCorrect === totalCorrect) return 100;

    return Math.round((selectedCorrect / totalCorrect) * 100);
  },

  async createAnswer(
    userId: string,
    questionId: string,
    selectedOptions: string[],
  ): Promise<Answer> {
    const score = await this.calculateScore(questionId, selectedOptions);
    return AnswerRepository.create({
      userId,
      questionId,
      selectedOptions,
      score,
    });
  },
};
