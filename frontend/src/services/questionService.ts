import { Question } from '../types/QuestionType';
import api from './api';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await api.get<Question[]>('/questions');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as perguntas:', error);
    throw error;
  }
};
