import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_TREAD: 'TOGGLE_UP_VOTE_TREAD',
  TOGGLE_DOWN_VOTE_TREAD: 'TOGGLE_DOWN_VOTE_TREAD',
  TOGGLE_NEUTRALIZE_VOTE_TREAD: 'TOGGLE_NEUTRALIZE_VOTE_TREAD',
};

const receiveThreadActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const toggleUpVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.TOGGLE_UP_VOTE_TREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_TREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralizeVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.TOGGLE_NEUTRALIZE_VOTE_TREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category = '' }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncToggleUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  console.log('data threadId dan authuser di action', threadId, authUser.id);

  dispatch(toggleUpVoteThreadActionCreator({ userId: authUser.id, threadId }));
  try {
    await api.toggleUpVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};
const asyncToggleDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  console.log('data threadId dan authuser di action', threadId, authUser.id);

  dispatch(toggleDownVoteThreadActionCreator({ userId: authUser.id, threadId }));
  try {
    await api.toggleDownVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};
const asyncToggleNeutralizeVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  console.log('data threadId dan authuser di action', threadId, authUser.id);

  dispatch(toggleNeutralizeVoteThreadActionCreator({ userId: authUser.id, threadId }));
  try {
    await api.toggleNeutralizeVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralizeVoteThreadActionCreator,
  asyncToggleDownVoteThread,
  asyncToggleNeutralizeVoteThread,
};
