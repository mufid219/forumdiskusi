import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import { asyncPupulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToggleDownVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action';
import Categoriesbar from '../components/Categoriesbar';
import Sidebar from '../components/Sidebar';

function HomePage({ title }) {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPupulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="h-screen bg-slate-400 flex flex-row">
      <Sidebar />
      <main className="flex-1 bg-white border-x-2 ">
        <div className="flex flex-row p-3 border-b-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <ThreadsList
          threads={threadList}
          upVote={onUpVoteThread}
          downVote={onDownVoteThread}
        />
      </main>
      <Categoriesbar />
    </div>

  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
