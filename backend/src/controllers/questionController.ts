import { Request, Response } from 'express';
import { QuestionService } from '../services/questionService';

export const QuestionController = {
  async getAllQuestions(req: Request, res: Response): Promise<void> {
    try {
      const questions = await QuestionService.getAllQuestions();
      res.json(questions);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },

  async getQuestionById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const question = await QuestionService.getQuestionById(id);
      if (!question) {
        res.status(404).json({ message: 'Questão não encontrada' });
        return;
      }
      res.json(question);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },
};
