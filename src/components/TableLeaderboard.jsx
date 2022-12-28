import React from 'react';
import PropTypes from 'prop-types';

function TableLeaderboard({ leaderboards }) {
  return (
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
  );
}

TableLeaderboard.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default TableLeaderboard;
