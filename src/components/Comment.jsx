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
  upVotesBy,
  downVotesBy,
}) {
  const totalUpVoteComment = upVotesBy ? upVotesBy.length : null;
  const totalDownVoteComment = downVotesBy ? downVotesBy.length : null;

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
        <h1 className="text-sm flex cursor-pointer items-center "><BiLike className="mr-1" /> {totalUpVoteComment}</h1>
        <h1 className="text-sm flex cursor-pointer items-center "><BiDislike className="mr-1" /> {totalDownVoteComment}</h1>
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
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVoteBy: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape(userShape).isRequired,
  })),
};
Comment.propTypes = {
  ...CommentShape,
};
export default Comment;
