import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
};

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const asyncAddComment = ({ content, id }) => async (dispatch) => {
  try {
    console.log('data di redux comment', content, id);
    const dataComment = await api.createComment({ content, id });
    dispatch(addCommentActionCreator(dataComment));
    console.log('sampe sini g');
  } catch (error) {
    console.log('hallo bray kamu error di action comment');
    alert(error.message);
  }
};

export {
  ActionType,
  addCommentActionCreator,
  asyncAddComment,
};
