import { FormEvent, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { getUserByName } from '../services/userService';

const Home = () => {
  const [name, setName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setUserName } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Por favor, insira um nome.');
      return;
    }

    try {
      const existingUser = await getUserByName(name);

      if (existingUser) {
        setErrorMessage('Este nome já está em uso. Escolha outro.');
        return;
      }

      setUserName(name);

      navigate('/question');
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage('Erro ao criar o usuário. Tente novamente.');
      } else {
        setErrorMessage('Erro desconhecido. Tente novamente.');
      }
    }
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Digite seu nome</h2>
        <form onSubmit={handleSubmit} className='space-y-2'>
          <div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Seu nome'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500'
              required
            />
            {errorMessage && (
              <p className='text-red-500 text-left mt-0.1 text-xs'>{errorMessage}</p>
            )}
          </div>
          <button
            type='submit'
            className='w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition'
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
