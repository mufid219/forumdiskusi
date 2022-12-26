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
  try {
    const leaderboards = await api.getAllLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboard,
};
