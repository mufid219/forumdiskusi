import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
import { postedAt } from '../utils';
import Comment from './Comment';
import useInput from '../hooks/useInput';

function Detail({
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  upVote,
  downVote,
  addComment,
  upVoteComment,
  downVoteComment,
}) {
  const totalUpVote = upVotesBy ? upVotesBy.length : null;
  const totalDownVote = downVotesBy ? downVotesBy.length : null;

  const [content, onContentChange, setValue] = useInput('');

  const isUpVoteDetail = upVotesBy.includes(authUser);
  const isDownVoteDetail = downVotesBy.includes(authUser);

  const onUpVoteDetailClick = (e) => {
    e.stopPropagation();
    upVote();
  };

  const onDownVoteDetailClick = (e) => {
    e.stopPropagation();
    downVote();
  };

  const onCommentHandler = () => {
    if (content.trim()) {
      addComment(content);
      setValue('');
    }
  };

  return (
    <div className="border-2 rounded-2xl m-3">
      <div className="flex flex-col p-5">
        <h1 className=" text-black border-2 w-fit rounded-xl p-2 mb-2">#{category}</h1>
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">{title}</h1>
        <h1 className="mb-1">{HTMLReactParser(body)}</h1>
        <div className="flex flex-row justify-start gap-x-2 items-center">
          <p className="text-sm flex cursor-pointer items-center ">
            <button type="button" onClick={onUpVoteDetailClick}>
              { isUpVoteDetail ? (<BiLike className="mr-1" style={{ color: 'blue' }} />) : (<BiLike className="mr-1" />)}
            </button>
            {totalUpVote}
          </p>
          <p className="text-sm flex cursor-pointer items-center ">
            <button type="button" onClick={onDownVoteDetailClick}>
              { isDownVoteDetail ? (<BiDislike className="mr-1" style={{ color: 'red' }} />) : (<BiDislike className="mr-1" />)}
            </button>{totalDownVote}
          </p>
          <h1 className="text-xs flex flex-row items-center">Dibuat oleh
            <img src={owner.avatar} alt="" className="w-5 h-5 rounded-full ml-2 mr-1" />
            {owner.name}
          </h1>
          <h1 className="text-xs">{postedAt(createdAt)}</h1>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Beri Komentar</h1>
        <div className="mb-2">
          <textarea value={content} onChange={onContentChange} className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mx-auto" />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={onCommentHandler}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >Kirim
          </button>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Komentar ({comments.length})</h1>
        {
        comments.map((komen) => (
          <Comment
            key={komen.id}
            {...komen}
            authUser={authUser}
            upVoteComment={upVoteComment}
            downVoteComment={downVoteComment}
          />
        ))
      }
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
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVoteBy: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape(userShape).isRequired,
  })),
};
Detail.propTypes = {
  ...threadItemShape,
  addComment: PropTypes.func,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,

};
Detail.defaultProps = {
  addComment: null,
  upVote: null,
  downVote: null,
};
export default Detail;
