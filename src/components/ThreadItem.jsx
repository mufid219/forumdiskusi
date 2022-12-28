import React from 'react';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  authUser,
  user,
  upVote,
  downVote,
}) {
  const navigate = useNavigate();

  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteThreadClick = (e) => {
    e.stopPropagation();
    upVote(id);
  };

  const onDownVoteThreadClick = (e) => {
    e.stopPropagation();
    downVote(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const totalUpVote = upVotesBy ? upVotesBy.length : null;
  const totalDownVote = downVotesBy ? downVotesBy.length : null;
  return (
    <div role="button" tabIndex={0} className="flex flex-col w-full border-2 rounded-2xl p-3 mb-2 cursor-pointer" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <h1 className=" text-black border-2 w-fit rounded-xl p-2 mb-2">#{category}</h1>
      <h1 className="text-lg font-bold text-black cursor-pointer px-2">{title}</h1>
      <h1 className="text-sm mb-1 px-2">{HTMLReactParser(body)}</h1>
      <div className="flex flex-row justify-start gap-x-2 items-center px-2">
        <p className="text-sm flex cursor-pointer items-center ">
          <button type="button" onClick={onUpVoteThreadClick}>
            { isThreadUpVote ? (<BiLike className="mr-1" style={{ color: 'blue' }} />) : (<BiLike className="mr-1" />)}
          </button>
          {totalUpVote}
        </p>
        <p className="text-sm flex cursor-pointer items-center ">
          <button type="button" onClick={onDownVoteThreadClick}>
            { isThreadDownVote ? (<BiDislike className="mr-1" style={{ color: 'red' }} />) : (<BiDislike className="mr-1" />)}
          </button>{totalDownVote}
        </p>
        <h1 className="text-sm flex cursor-pointer items-center"><BiComment className="mr-1" /> {totalComments}</h1>
        <h1 className="text-xs">{postedAt(createdAt)}</h1>
        <h1 className="text-xs">Dibuat oleh {user.name}</h1>
      </div>
    </div>
  );
}
const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVoteBy: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.shape(userShape).isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
};
ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};
ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
