import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../components/Detail';
import { asyncReceiveThreadDetail } from '../states/detailThread/action';

function DetailPage({ title }) {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  console.log(threadDetail, authUser);
  if (!threadDetail) {
    return null;
  }
  return (
    <div className="flex-1 bg-white border-x-2 flex flex-col">
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold ">{title}</h1>
      </div>
      <Detail {...threadDetail} authUser={authUser} />
    </div>
  );
}
DetailPage.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DetailPage;
