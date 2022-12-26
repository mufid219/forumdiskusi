import { ActionType } from './action';

const commentsReducer = (comments = {}, action = {}) => {
  switch (action.type) {
    case (ActionType.ADD_COMMENT):
      return { ...comments, comment: action.payload };
    default:
      return comments;
  }
};

export default commentsReducer;
