import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import FormCreateThread from '../components/FormCreateThread';
import { asyncAddThread } from '../states/threads/action';

function CreateThreadPage({ desc }) {
  const dispatch = useDispatch();
  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
  };
  return (
    <>
      <div className="flex flex-col p-3 border-b-2">
        <h1 className="text-2xl font-semibold">{desc}</h1>
      </div>
      <FormCreateThread addThread={onAddThread} />
    </>

  );
}

CreateThreadPage.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default CreateThreadPage;
