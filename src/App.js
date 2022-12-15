import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/detail"
        element={<DetailPage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route
        path="/leaderboard"
        element={<LeaderboardPage />}
      />
      <Route
        path="/new"
        element={<CreateThreadPage />}
      />
    </Routes>
  );
}

export default App;
