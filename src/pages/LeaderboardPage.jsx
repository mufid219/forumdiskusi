import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import TableLeaderboard from '../components/TableLeaderboard';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';

function LeaderboardPage({ title }) {
  const {
    leaderboards = [],
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  console.log('leaderboads data di LPage', leaderboards);

  if (!leaderboards) {
    return null;
  }

  return (
    <>
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold ">{title}</h1>
      </div>

      <div className="flex flex-col border-2 rounded-2xl m-3 p-3">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Pengguna
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    leaderboards.map((leaderboard) => (
                      <tr className="bg-gray-100 border-b" key={leaderboard.user.id}>
                        <td className="flex flex-row items-center">
                          <img src={leaderboard.user.avatar} alt="" className="w-6 h-6 rounded-full m-1" />
                          <p className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">{leaderboard.user.name}</p>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {leaderboard.score}
                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* {
        leaderboards.map((leaderboard) => (
          <TableLeaderboard key={leaderboard.id} {...leaderboard} />
        ))
      } */}
    </>
  );
}
LeaderboardPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LeaderboardPage;
