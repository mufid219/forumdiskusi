import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_TREAD_DETAIL: 'TOGGLE_UP_VOTE_TREAD_DETAIL',
  TOGGLE_DOWN_VOTE_TREAD_DETAIL: 'TOGGLE_DOWN_VOTE_TREAD_DETAIL',
  TOGGLE_NEUTRALIZE_VOTE_TREAD_DETAIL: 'TOGGLE_NEUTRALIZE_VOTE_TREAD_DETAIL',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NETRALIZE_COMMENT: 'TOGGLE_NETRALIZE_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const toggleUpVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_UP_VOTE_TREAD_DETAIL,
  payload: {
    userId,
  },
});

const toggleDownVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_TREAD_DETAIL,
  payload: {
    userId,
  },
});

const toggleNeutralizeVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRALIZE_VOTE_TREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleUpVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_UP_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});
const toggleDownVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});
const toggleNetralVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(clearThreadDetailActionCreator());
  dispatch(showLoading());
  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncAddComment = ({ content, id }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const dataComment = await api.createComment({ content, id });
    dispatch(addCommentActionCreator(dataComment));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncToggleUpVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();

  dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));
  try {
    await api.toggleUpVoteThread(threadDetail.id);
  } catch (error) {
    alert(error.message);
    // dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};
const asyncToggleDownVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();

  dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));
  try {
    await api.toggleDownVoteThread(threadDetail.id);
  } catch (error) {
    alert(error.message);
    // dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralizeVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();

  dispatch(toggleNeutralizeVoteThreadDetailActionCreator(authUser.id));
  try {
    await api.toggleNeutralizeVoteThread(threadDetail.id);
  } catch (error) {
    alert(error.message);
    // dispatch(toggleNeutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleUpVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();

  dispatch(toggleUpVoteCommentActionCreator({ userId: authUser.id, commentId }));
  try {
    await api.toggleUpVoteComment({ threadId: threadDetail.id, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteCommentActionCreator({ userId: authUser.id, commentId }));
  }
};

const asyncToggleDownVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState();

  dispatch(toggleDownVoteCommentActionCreator({ userId: authUser.id, commentId }));
  try {
    await api.toggleDownVoteComment({ threadId: threadDetail.id, commentId });
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteCommentActionCreator({ userId: authUser.id, commentId }));
  }
};

const asyncToggleNetralVoteComment = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();

  dispatch(toggleNetralVoteCommentActionCreator({ userId: authUser.id, threadId }));
  try {
    await api.toggleNeutralizeVoteComment(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNetralVoteCommentActionCreator({ userId: authUser.id, threadId }));
  }
};

export {
  ActionType,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  addCommentActionCreator,
  asyncAddComment,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralizeVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleNetralVoteCommentActionCreator,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralizeVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNetralVoteComment,
};
