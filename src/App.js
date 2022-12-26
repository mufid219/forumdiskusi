import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categoriesbar from './components/Categoriesbar';
import Loading from './components/Loading';
import Sidebar from './components/Sidebar';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main className="flex-1 bg-white border-x-2">
          <Routes>

            <Route
              path="/*"
              element={<LoginPage title="Sign in" />}
            />
            <Route
              path="/register"
              element={<RegisterPage title="Register" />}
            />
          </Routes>
        </main>
      </>
    );
  }
  return (
    <>
      <Loading />
      <div className="h-screen bg-slate-400 flex flex-row">
        <Sidebar signOut={onSignOut} />
        <main className="flex-1 bg-white border-x-2 ">
          <Routes>
            <Route
              path="/"
              element={<HomePage title="Diskusi Tersedia" />}
            />
            <Route
              path="/threads/:id"
              element={<DetailPage title="Detail" />}
            />
            {/* <Route
            path="/login"
            element={<LoginPage title="Sign in" />}
          />
          <Route
            path="/register"
            element={<RegisterPage title="Register" />}
          /> */}
            <Route
              path="/leaderboard"
              element={<LeaderboardPage title="Klasemen pengguna aktif" />}
            />
            <Route
              path="/new"
              element={<CreateThreadPage desc="Buat Diskusi Baru" />}
            />
          </Routes>
        </main>
        <Categoriesbar />

      </div>
    </>
  );
}

export default App;
