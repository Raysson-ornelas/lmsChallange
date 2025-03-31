import React, { useState, useEffect } from 'react';
import { getRanking } from '../services/userService';
import { useUser } from '../context/UserContext';

interface RankingEntry {
  username: string;
  score: number;
  createdAt: string;
}

const RankingPage: React.FC = () => {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const { userName } = useUser();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data: RankingEntry[] = await getRanking();
        setRanking(data);
      } catch (error) {
        console.error('Erro ao carregar ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800'>Ranking</h2>
      <div className='w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg'>
        {ranking.length === 0 ? (
          <p className='text-gray-600 text-center'>Nenhum usuário no ranking no momento.</p>
        ) : (
          <table className='min-w-full table-auto border-collapse rounded-lg overflow-hidden'>
            <thead>
              <tr className='bg-amber-600 text-white'>
                <th className='py-3 px-4 text-left text-sm font-semibold'>Posição</th>
                <th className='py-3 px-4 text-left text-sm font-semibold'>Usuário</th>
                <th className='py-3 px-4 text-left text-sm font-semibold'>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((entry, index) => {
                const isCurrentUser = entry.username === userName;

                return (
                  <tr
                    key={index}
                    className={`border-t ${
                      isCurrentUser ? 'bg-green-200 font-bold text-green-800' : ''
                    }`}
                  >
                    <td className='py-3 px-4 text-sm text-gray-700'>{index + 1}</td>
                    <td className='py-3 px-4 text-sm text-gray-700'>{entry.username}</td>
                    <td className='py-3 px-4 text-sm text-gray-700'>{entry.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RankingPage;
