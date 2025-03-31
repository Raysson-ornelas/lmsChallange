import Template from './components/Template';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import RankingPage from './pages/Ranking';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Template>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ranking' element={<RankingPage />} />
            <Route element={<PrivateRoute />}>
              <Route path='/question' element={<Question />} />
            </Route>
          </Routes>
        </Template>
      </Router>
    </UserProvider>
  );
}

export default App;
