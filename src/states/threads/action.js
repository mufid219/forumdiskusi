import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
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

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveThreadActionCreator,
  addThreadActionCreator,
  asyncAddThread,
};
