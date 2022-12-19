import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categoriesbar from './components/Categoriesbar';
import Sidebar from './components/Sidebar';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <main className="flex-1 bg-white border-x-2 ">
        <Routes>
          <Route
            path="/"
            element={<HomePage title="Diskusi Tersedia" />}
          />
          <Route
            path="/detail"
            element={<DetailPage title="Detail" />}
          />
          <Route
            path="/login"
            element={<LoginPage title="Sign in" />}
          />
          <Route
            path="/register"
            element={<RegisterPage title="Register" />}
          />
          <Route
            path="/leaderboard"
            element={<LeaderboardPage title="Klasemen pengguna aktif" />}
          />
          <Route
            path="/new"
            element={<CreateThreadPage title="Buat Diskusi Baru" />}
          />
        </Routes>
      </main>
      <Categoriesbar />

    </div>
  );
}

export default App;
