import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export const UserController = {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { username } = req.body;

      const user = await UserService.createUser(username);
      res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },

  async getUserByName(req: Request, res: Response): Promise<void> {
    try {
      const { username } = req.params;
      const existingUser = await UserService.getUserByUsername(username);
      if (!existingUser) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
      }
      res.status(200).json(existingUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }
      res.json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },

  async getRanking(req: Request, res: Response): Promise<void> {
    try {
      const ranking = await UserService.getRanking();
      res.status(200).json(ranking);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  },
};
