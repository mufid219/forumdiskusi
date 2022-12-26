import React from 'react';
import PropTypes from 'prop-types';

function TableLeaderboard(props) {
  console.log('data dari tableleaderboard', props);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                    props.map((leaderboard) => {
                      <tr className="bg-gray-100 border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {leaderboard.user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {leaderboard.score}
                        </td>
                      </tr>;
                    })
                  }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
// const userShape = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// };
const leaderboardsItemShape = {
  props: PropTypes.string.isRequired,
  // user: PropTypes.shape(userShape).isRequired,
};
TableLeaderboard.propTypes = {
  ...leaderboardsItemShape,
};
export default TableLeaderboard;
