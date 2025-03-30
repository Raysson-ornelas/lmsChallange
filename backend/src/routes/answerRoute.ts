import { Router } from 'express';
import { AnswerController } from '../controllers/answerController';

const router = Router();

router.post('/answers', AnswerController.createAnswer);

export default router;
