import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import { asyncPupulateUsersAndThreads } from '../states/shared/action';

function HomePage({ title }) {
  const { threads = [], users = [], authUser } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPupulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <>
      <div className="flex flex-row p-3 border-b-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <ThreadsList threads={threadList} />
    </>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
