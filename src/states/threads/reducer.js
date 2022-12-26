import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case (ActionType.RECEIVE_THREADS):
      return action.payload.threads;
    case (ActionType.ADD_THREAD):
      return [action.payload.thread, ...threads];
    case (ActionType.TOGGLE_UP_VOTE_TREAD):
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVoteBy: thread.upVoteBy.includes(action.payload.userId)
              ? thread.upVoteBy.filter((id) => id !== action.payload.userId)
              : thread.upVoteBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
};

export default threadsReducer;
