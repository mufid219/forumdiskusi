import api from '../../utils/api';
import { receiveThreadActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPupulateUsersAndThreads = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();

    dispatch(receiveUsersActionCreator(users));
    dispatch(receiveThreadActionCreator(threads));
  } catch (error) {
    alert(error.message);
  }
};

export { asyncPupulateUsersAndThreads };
