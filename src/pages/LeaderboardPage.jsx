import React from 'react';
import PropTypes from 'prop-types';
import TableLeaderboard from '../components/TableLeaderboard';

function LeaderboardPage({ title }) {
  return (
    <>
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold ">{title}</h1>
      </div>
      <TableLeaderboard />
    </>
  );
}
LeaderboardPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LeaderboardPage;
