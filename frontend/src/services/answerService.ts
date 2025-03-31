import api from './api';

export const submitAnswer = async (
  username: string,
  questionId: string,
  selectedAnswerIds: string[],
) => {
  try {
    const response = await api.post('/answers', {
      username,
      questionId,
      selectedAnswerIds,
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);
    throw error;
  }
};
