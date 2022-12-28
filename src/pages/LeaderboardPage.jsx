import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TableLeaderboard from '../components/TableLeaderboard';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import Categoriesbar from '../components/Categoriesbar';
import Sidebar from '../components/Sidebar';

function LeaderboardPage({ title }) {
  const {
    leaderboards = [],
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <main className="flex-1 bg-white border-x-2 ">
        <div className="flex flex-row p-3 border-b-2">
          <h1 className="text-2xl font-semibold ">{title}</h1>
        </div>
        <TableLeaderboard leaderboards={leaderboards} />

      </main>
      <Categoriesbar />
    </div>

  );
}
LeaderboardPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LeaderboardPage;
