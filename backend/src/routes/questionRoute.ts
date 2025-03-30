import { Router } from 'express';
import { QuestionController } from '../controllers/questionController';

const router = Router();

router.get('/questions', QuestionController.getAllQuestions);
router.get('/questions/:id', QuestionController.getQuestionById);

export default router;
