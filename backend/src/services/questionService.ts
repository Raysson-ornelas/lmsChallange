import { Question } from '@prisma/client';
import { QuestionRepository } from '../repositories/questionRepository';

export const QuestionService = {
  async getAllQuestions(): Promise<Question[]> {
    return QuestionRepository.getAll();
  },
  async getQuestionById(id: string): Promise<Question | null> {
    return QuestionRepository.getById(id);
  },
};
