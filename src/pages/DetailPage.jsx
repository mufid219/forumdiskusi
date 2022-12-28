import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../components/Detail';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteComment,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
} from '../states/detailThread/action';
import Sidebar from '../components/Sidebar';
import Categoriesbar from '../components/Categoriesbar';

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

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ content, id }));
  };

  const onUpVoteDetail = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDownVoteDetail = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  const onUpVoteComment = (threadId) => {
    dispatch(asyncToggleUpVoteComment(threadId));
  };

  const onDownVoteComment = (threadId) => {
    dispatch(asyncToggleDownVoteComment(threadId));
  };

  if (!threadDetail) {
    return null;
  }
  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <main className="flex-1 bg-white border-x-2 ">
        <div className="flex-1 bg-white border-x-2 flex flex-col">
          <div className="flex flex-row p-3 border-b-2">
            <h1 className="text-2xl font-semibold ">{title}</h1>
          </div>
          <Detail
            {...threadDetail}
            authUser={authUser.id}
            addComment={onAddComment}
            upVote={onUpVoteDetail}
            downVote={onDownVoteDetail}
            upVoteComment={onUpVoteComment}
            downVoteComment={onDownVoteComment}
          />
        </div>
      </main>
      <Categoriesbar />
    </div>

  );
}
DetailPage.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DetailPage;
