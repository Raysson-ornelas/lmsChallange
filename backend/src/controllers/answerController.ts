import { Request, Response } from 'express';
import { AnswerService } from '../services/answerService';

export const AnswerController = {
  async createAnswer(req: Request, res: Response): Promise<void> {
    try {
      const { userId, questionId, selectedOptions } = req.body;
      const answer = await AnswerService.createAnswer(userId, questionId, selectedOptions);
      res.status(201).json(answer);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },
};
