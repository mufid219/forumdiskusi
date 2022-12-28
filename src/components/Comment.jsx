import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';

function Comment({
  id,
  content,
  createdAt,
  owner,
  authUser,
  upVotesBy,
  downVotesBy,
  upVoteComment,
  downVoteComment,
}) {
  const totalUpVoteComment = upVotesBy ? upVotesBy.length : null;
  const totalDownVoteComment = downVotesBy ? downVotesBy.length : null;

  const isUpVoteComment = upVotesBy?.includes(authUser);
  const isDownVoteComment = downVotesBy.includes(authUser);

  const onUpVoteClick = (e) => {
    e.stopPropagation();
    if (!isUpVoteComment && !isUpVoteComment) {
      upVoteComment(id);
    }
  };

  const onDownVoteClick = (e) => {
    e.stopPropagation();
    if (!isDownVoteComment && !isDownVoteComment) {
      downVoteComment(id);
    }
  };

  return (
    <div className="flex flex-col w-full border-2 rounded-2xl p-3 mb-2">
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-row items-center justify-start">
          <img src={owner.avatar} alt="" className="w-6 h-6 rounded-full mr-2" />
          <p className="text-lg font-bold">{owner.name}</p>
        </div>
        <p className="">{postedAt(createdAt)}</p>
      </div>
      <h1 className="mb-1">{HTMLReactParser(content)}</h1>
      <div className="flex flex-row justify-start gap-x-4 items-center">
        <p className="text-sm flex cursor-pointer items-center ">
          <button type="button" onClick={onUpVoteClick}>
            { isUpVoteComment ? (<BiLike className="mr-1" style={{ color: 'blue' }} />) : (<BiLike className="mr-1" />)}
          </button>
          {totalUpVoteComment}
        </p>
        <p className="text-sm flex cursor-pointer items-center ">
          <button type="button" onClick={onDownVoteClick}>
            { isDownVoteComment ? (<BiDislike className="mr-1" style={{ color: 'red' }} />) : (<BiDislike className="mr-1" />)}
          </button>{totalDownVoteComment}
        </p>
      </div>
    </div>
  );
}
const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
const CommentShape = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    authUser: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVoteBy: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape(userShape).isRequired,
  })),
};
Comment.propTypes = {
  ...CommentShape,
  upVoteComment: PropTypes.func,
  downVoteComment: PropTypes.func,
};
Comment.defaultProps = {
  upVoteComment: null,
  downVoteComment: null,
};
export default Comment;
