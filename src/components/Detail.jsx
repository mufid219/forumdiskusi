import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postedAt } from '../utils';
import Comment from './Comment';
import useInput from '../hooks/useInput';
import { asyncAddComment } from '../states/comments/action';
// import { asyncAddComment } from '../states/comments/action';

function Detail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
}) {
  const totalUpVote = upVotesBy ? upVotesBy.length : null;
  const totalDownVote = downVotesBy ? downVotesBy.length : null;

  const [content, onContentChange] = useInput('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddComment = ({ id, content }) => {
    console.log(content, id);
    dispatch(asyncAddComment({ id, content }));
    navigate('/');
  };

  return (
    <div className="border-2 rounded-2xl m-3">
      <div className="flex flex-col p-5">
        <h1 className=" text-black border-2 w-fit rounded-xl p-2 mb-2">#{category}</h1>
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">{title}</h1>
        <h1 className="mb-1">{HTMLReactParser(body)}</h1>
        <div className="flex flex-row justify-start gap-x-2 items-center">
          <h1 className="text-sm flex cursor-pointer items-center "><BiLike className="mr-1" /> {totalUpVote}</h1>
          <h1 className="text-sm flex cursor-pointer items-center "><BiDislike className="mr-1" /> {totalDownVote}</h1>
          <h1 className="text-xs">Dibuat oleh {owner.name}</h1>
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
            onClick={(e) => {
              e.preventDefault();
              onAddComment({ id, content });
            }}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >Kirim
          </button>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-bold text-black cursor-pointer mb-1">Komentar ({comments.length})</h1>
        {
        comments.map((komen) => (
          <Comment key={komen.id} {...komen} />
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
  authUser: PropTypes.object.isRequired,
  // addComment: PropTypes.func.isRequired,
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
};
// ThreadItem.defaultProps = {

// };
export default Detail;
