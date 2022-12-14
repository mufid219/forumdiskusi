import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
    </Routes>
  );
}

export default App;
