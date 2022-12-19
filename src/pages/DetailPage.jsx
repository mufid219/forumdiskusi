import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';

function DetailPage({ title }) {
  return (
    <div className="flex-1 bg-white border-x-2 flex flex-col">
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold ">{title}</h1>
      </div>
      <Detail />
    </div>
  );
}
DetailPage.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DetailPage;
