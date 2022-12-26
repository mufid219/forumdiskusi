import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncReceiveLeaderboard = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const leaderboards = await api.getAllLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboard,
};
