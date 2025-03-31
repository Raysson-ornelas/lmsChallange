import React, { useState } from 'react';

import { Question, Option } from '../types/QuestionType';

interface QuestionCardProps {
  question: Question;
  handleSubmit: (selectedOptions: string[]) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, handleSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (optionId: string) => {
    setSelectedOptions((prevSelectedAnswers) => {
      if (prevSelectedAnswers.includes(optionId)) {
        return prevSelectedAnswers.filter((id) => id !== optionId);
      }
      return [...prevSelectedAnswers, optionId];
    });
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg space-y-4'>
      <h2 className='text-xl font-semibold text-gray-800'>{question.text}</h2>

      <div className='space-y-2'>
        {question.options.map((option: Option) => (
          <div key={option.id} className='flex items-center'>
            <input
              type='checkbox'
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleOptionChange(option.id)}
              className='h-5 w-5 text-amber-500 border-gray-300 rounded'
            />
            <label htmlFor={option.id} className='ml-2 text-gray-700'>
              {option.text}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleSubmit(selectedOptions)}
        className='w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition'
      >
        Enviar Resposta
      </button>
    </div>
  );
};

export default QuestionCard;
