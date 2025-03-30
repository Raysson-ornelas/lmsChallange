import { UserController } from '../controllers/userController';
import { Router } from 'express';

const router = Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.get('/users/ranking', UserController.getRanking);

export default router;
