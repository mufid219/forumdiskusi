import React from 'react';
import PropTypes from 'prop-types';
import FormCreateThread from '../components/FormCreateThread';

function CreateThreadPage({ title }) {
  return (
    <>
      <div className="flex flex-col p-3 border-b-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <FormCreateThread />
    </>

  );
}

CreateThreadPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CreateThreadPage;
