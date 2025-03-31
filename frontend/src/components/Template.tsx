import { useNavigate } from 'react-router-dom';

type TemplateProps = {
  children: React.ReactElement;
};

const Template = ({ children }: TemplateProps) => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <nav className='bg-amber-600 text-white py-4 px-6 shadow-md flex flex-wrap justify-between items-center'>
        <h1 className='text-lg sm:text-2xl font-semibold truncate max-w-[60%] sm:max-w-full'>
          LMS - Learning Management System
        </h1>
        <div className='flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-2 sm:mt-0'>
          <button
            className='bg-white text-amber-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm sm:text-base'
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className='bg-white text-amber-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm sm:text-base'
            onClick={() => navigate('/ranking')}
          >
            Ranking
          </button>
        </div>
      </nav>
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default Template;
