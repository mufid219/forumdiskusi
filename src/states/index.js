import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import threadDetailReducer from './detailThread/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
