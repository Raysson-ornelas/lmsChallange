import { AxiosError } from 'axios';
import api from './api';

export const createUser = async (username: string) => {
  try {
    const response = await api.post('/users', { username });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const getRanking = async () => {
  try {
    const response = await api.get('/user/ranking');
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar o ranking:', error);
    throw error;
  }
};

export const getUserByName = async (username: string) => {
  try {
    const response = await api.get(`/users/name/${username}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};
