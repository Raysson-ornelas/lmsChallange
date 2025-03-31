import { Request, Response } from 'express';
import { AnswerService } from '../services/answerService';
import { UserService } from '../services/userService';

export const AnswerController = {
  async createAnswer(req: Request, res: Response): Promise<void> {
    try {
      const { username, questionId, selectedAnswerIds } = req.body;
      const user = await UserService.createUser(username);
      const answer = await AnswerService.createAnswer(user.id, questionId, selectedAnswerIds);
      await UserService.updateScore(user.id, answer.score);
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
