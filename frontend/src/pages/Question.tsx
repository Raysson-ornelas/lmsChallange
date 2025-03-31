import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import { getQuestions } from '../services/questionService';
import { Question } from '../types/QuestionType';
import { submitAnswer } from '../services/answerService';
import { useUser } from '../context/UserContext';

const QuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex] = useState(0);
  const navigate = useNavigate();
  const { userName } = useUser();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response);
      } catch (error) {
        console.error('Erro ao carregar as perguntas:', error);
      }
    };

    fetchQuestions();
  }, [navigate]);

  const handleSubmit = async (selectedOptions: string[]) => {
    if (userName && selectedOptions.length > 0) {
      try {
        await submitAnswer(userName, questions[currentIndex].id, selectedOptions);

        navigate('/ranking');
      } catch (error) {
        console.error('Erro ao enviar resposta:', error);
      }
    } else {
      alert('Por favor, selecione uma resposta.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      {userName && (
        <h2 className='text-lg font-semibold text-gray-800 mb-4 text-center'>
          Que nome bonito você tem, {userName}! Agora, por favor, responda a seguinte pergunta.
        </h2>
      )}
      {questions.length > 0 && (
        <div className='w-full max-w-4xl'>
          <QuestionCard question={questions[currentIndex]} handleSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
