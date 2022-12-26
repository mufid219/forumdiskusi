import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
  TOGGLE_UP_VOTE_TREADS: 'TOGGLE_UP_VOTE_TREADS',
};

const receiveThreadActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREADS,
  payload: {
    thread,
  },
});

const toggleUpVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.TOGGLE_UP_VOTE_TREADS,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category = '' }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
};

const asyncToggleUpVoteThread = ({ threadId }) => async (dispatch, getState) => {
  const { authUser } = getState();

  dispatch(toggleUpVoteThreadActionCreator({ userId: authUser.id, threadId }));
  try {
    await api.toggleUpVoteThread(threadId);
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveThreadActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
};
